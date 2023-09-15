import React, { useState, useEffect } from 'react';
import './reading.css';
import ielts11 from '../../../assets/audios/ielts11.mp3';
import { SlArrowDown,SlArrowUp } from 'react-icons/sl';
import {main , handleHighlight,handleDehighlight,searchOnGoogle} from './main';
import { TbHighlight,TbHighlightOff,TbSearch } from "react-icons/tb";
import practicecommonstyles from '../practiceCommon.module.css'
import Button from "../../Button/Button"

const Reading = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  

  useEffect(() => {
    main();
    const handleScroll = () => {
      const readingPassageContainer = document.getElementById('readingPassageContainer');
      const offset = readingPassageContainer.offsetTop + readingPassageContainer.offsetHeight;
      setIsSticky(window.pageYOffset >= offset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleHeight = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='container'>
      <div className={practicecommonstyles.practice_page_container}>
        <div className={practicecommonstyles.practice_page_child1}>
          <div className={practicecommonstyles.practice_page_title}>
            <h1>Reading Practice</h1>
            <h5>Get your Reading skills evaluated</h5>
          </div>
          <div 
            className={`reading-passage-container ${isSticky ? 'sticky' : ''} ${isExpanded ? 'expanded' : ''}`}
            id="readingPassageContainer"
            //onMouseUp={handleTextSelection} 
            class={"selectable-text-area"}
          ><p>
          We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.

          Over the years, we’ve come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely ‘well travelled’, even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn’t take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.
          
          Over the years, we’ve come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely ‘well travelled’, even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn’t take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.
          
          Over the years, we’ve come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely ‘well travelled’, even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn’t take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.We are all explorers. Our desire to discover, and then share that new-found knowledge, is part of what makes us human – indeed, this has played an important part in our success as a species. Long before the first caveman slumped down beside the fire and grunted news that there were plenty of wildebeest over yonder, our ancestors had learnt the value of sending out scouts to investigate the unknown. This questing nature of ours undoubtedly helped our species spread around the globe, just as it nowadays no doubt helps the last nomadic Penan maintain their existence in the depleted forests of Borneo, and a visitor negotiate the subways of New York.
          
          Over the years, we’ve come to think of explorers as a peculiar breed – different from the rest of us, different from those of us who are merely ‘well travelled’, even; and perhaps there is a type of person more suited to seeking out the new, a type of caveman more inclined to risk venturing out. That, however, doesn’t take away from the fact that we all have this enquiring instinct, even today; and that in all sorts of professions – whether artist, marine biologist or astronomer – borders of the unknown are being tested each day.
          </p>
          
            <div>
          {isSticky && (
          <div onClick={toggleHeight}>
            {isExpanded ? <SlArrowUp className="close-button"/> : <SlArrowDown className="close-button"/>}
          </div>
        )}
          </div>
          </div>
          <div className={practicecommonstyles.practice_page_child2}>
          <p>a</p>
           <p>a</p>
            <p>a</p>
             <p>a</p>
              <p>a</p>
               <p>a</p>
                <p>a</p>
                 <p>a</p>
                  <p>a</p>
                   <p>a</p>
                    <p>a</p>
                     <p>a</p>
                      <p>a</p> <p>a</p>
                       <p>a</p>
                        <p>a</p>

                         <p>a</p>
                          <p>a</p>
                           <p>a</p>
                            <p>a</p> <p>a</p>
                             <p>a</p>


                              <p>a</p>
                               <p>a</p>

                                <p>a</p>
                                 <p>a</p>
                                  <p>a</p>
                                  </div>
        </div>
        <div className='button-container'>

<button id="highlight-btn" onClick={handleHighlight} title="Highlight selected text">
  <TbHighlight />
</button>
<button id="dehighlight-btn" onClick={handleDehighlight} title="Remove highlight">
  <TbHighlightOff />
</button>
<button id="dehighlightall-btn" onClick={searchOnGoogle} title="Search selected text on Google">
  <TbSearch />
</button>

      </div>
        <div className={practicecommonstyles.practice_page_child2}>
          <h2>Four Pillars of IELTS writing</h2>
          <ul>
            <li>Task Response</li>
            <li>Coherence and Cohesion</li>
            <li>Lexical Resource (Vocabulary)</li>
            <li>Grammatical Range & Accuracy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reading;
