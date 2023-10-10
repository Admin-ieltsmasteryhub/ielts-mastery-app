import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import _ from 'lodash';


const initialState = { isLoading: false, results: [], value: '' };

export default class TempComp extends Component {
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
      
      <Search
        input={{ icon: 
          'search',
          iconPosition: 'left' }}
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
