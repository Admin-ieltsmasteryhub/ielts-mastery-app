import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';
import styles from '../global.module.css'


const initialState = { isLoading: false, results: [], value: '' };

export default class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => this.setState({ value: result.title });

  handleSearchChange = async (e, { value }) => {
    this.setState({ isLoading: true, value });

    // Make an API request to fetch data based on the title
    try {
      const response = await fetch(`https://localhost:7284/api/Blog`);
      const data = await response.json(); // Parse the JSON response

      setTimeout(() => {
        if (this.state.value.length < 1) return this.setState(initialState);

        const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
        const isMatch = (result) => re.test(result.title);

        this.setState({
          isLoading: false,
          results: data.filter(isMatch), // Filter the data based on the title
        });
      }, 300);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({
        isLoading: false,
        results: [],
      });
    }
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <>
      <style>
          {`
            .ui.icon.input > i.icon {
              color: #e31837;
              
            }

            .ui.search .prompt {
              border-radius: 0rem;
              width: 250px;
            }
            .ui.input>input:focus{
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              border-color: gainsboro;
            }

            .ui.input:hover {
              box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }

            .ui.search>.results {
              top: auto;
              left: auto;
              position: fixed;
              max-height: 200px;
              overflow-y: auto;
            }

            .container-fluid{
              --bs-gutter-x: 3rem;
            }

            @media only screen and (max-width: 991px) {
              .ui.search .prompt {
                width: 210px;
              }
            }
          }
          `}
        </style>
      <Search
        input={{ icon: 
          'search',
          iconPosition: 'left' }}
        size='tiny'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results.map((item) => ({
          title: item.title // Use the article as the description
          // You can add more fields if needed
        }))}
        value={value}
      />
      </>
    );
  }
}
