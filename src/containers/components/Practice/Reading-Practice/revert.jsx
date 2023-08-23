// import React, { useState, useEffect } from 'react';
// import './reading.css';
// import ielts11 from '../../../assets/audios/ielts11.mp3';
// import { SlArrowDown,SlArrowUp } from 'react-icons/sl';

// const Reading = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [selectedText, setSelectedText] = useState(null);
//   const [showHighlightPopup, setShowHighlightPopup] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const audioPlayerContainer = document.getElementById('readingPassageContainer');
//       const offset = audioPlayerContainer.offsetTop + audioPlayerContainer.offsetHeight;
//       setIsSticky(window.pageYOffset >= offset);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleHeight = () => {
//     setIsExpanded((prevExpanded) => !prevExpanded);
//   };

//   const handleTextSelection = () => {
//     const selectedText = window.getSelection().toString().trim();
//     setSelectedText(selectedText);
//     if (selectedText) {
//       setShowHighlightPopup(true);
//     }
//   };

//   const handleHighlight = () => {
//     const highlightColor = 'yellow'; // You can change this color as per your preference
  
//     // Get the selected text
//     const selection = window.getSelection();
//     const selectedRange = selection.getRangeAt(0);
//     const selectedText = selectedRange.toString().trim();
  
//     if (selectedText) {
//       // Create a new span element to wrap the selected text and apply the highlight
//       const highlightSpan = document.createElement('span');
//       highlightSpan.style.backgroundColor = highlightColor;
//       highlightSpan.innerText = selectedText;
  
//       // Replace the selected text with the highlighted span
//       selectedRange.deleteContents();
//       selectedRange.insertNode(highlightSpan);
  
//       // Clear the selection
//       selection.removeAllRanges();
  
//       // You can store the highlighted text or perform any other operations here
//     }
  
//     setShowHighlightPopup(false);
//   };
  

//   return (
//     <div className='container'>
//       <div className="article-page">
//         <div className="container_a">
//           <div className='title_practice_page '>
//             <h1>Reading Practice</h1>
//             <h5>Get your Reading skills evaluated</h5>
//           </div>
//           <div 
//             className={`reading-passage-container ${isSticky ? 'sticky' : ''} ${isExpanded ? 'expanded' : ''}`}
//             id="readingPassageContainer"
//             onMouseUp={handleTextSelection} 
//           ><p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p><p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>

//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>

//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>

//           <p>q</p>
//           <p>q</p>

//           <p>q</p>
//           <p>q</p>
//           <p>q</p>
//           <p>q</p>

//           <p>q</p><p>q</p>

//           <p>q</p>
          
//             <div>
//           {isSticky && (
//           <div onClick={toggleHeight}>
//             {isExpanded ? <SlArrowUp className="close-button"/> : <SlArrowDown className="close-button"/>}
//           </div>
//         )}
//           </div>
//           </div>
//           <p>a</p>
//            <p>a</p>
//             <p>a</p>
//              <p>a</p>
//               <p>a</p>
//                <p>a</p>
//                 <p>a</p>
//                  <p>a</p>
//                   <p>a</p>
//                    <p>a</p>
//                     <p>a</p>
//                      <p>a</p>
//                       <p>a</p> <p>a</p>
//                        <p>a</p>
//                         <p>a</p>

//                          <p>a</p>
//                           <p>a</p>
//                            <p>a</p>
//                             <p>a</p> <p>a</p>
//                              <p>a</p>


//                               <p>a</p>
//                                <p>a</p>

//                                 <p>a</p>
//                                  <p>a</p>
//                                   <p>a</p>

//         </div>
//         <div>
//         {showHighlightPopup && (
//           <div className="highlight-popup">
//             <button onClick={handleHighlight}>Highlight</button>
//           </div>
//         )}
//       </div>
//         <div className="related-container">
//           <h2>Four Pillars of IELTS writing</h2>
//           <ul>
//             <li>Task Response</li>
//             <li>Coherence and Cohesion</li>
//             <li>Lexical Resource (Vocabulary)</li>
//             <li>Grammatical Range & Accuracy</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reading;
