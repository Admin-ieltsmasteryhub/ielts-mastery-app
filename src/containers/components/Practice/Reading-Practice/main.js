
export const main = () =>{
    
    const selectableTextArea = document.querySelectorAll(".selectable-text-area");
    const highlightButton = document.querySelector("#highlight-btn");
    const deHighlightButton = document.querySelector("#dehighlight-btn");
    const dehighlightAllButtton = document.querySelector("#dehighlightall-btn");

    
    //elem - text area selected, on mouseup event call selectableTextAreaMouseUp function
    selectableTextArea.forEach(elem =>{
        elem.addEventListener("mouseup",selectableTextAreaMouseUp);
        elem.addEventListener("mousedown",documentMouseDown);
    })

    function selectableTextAreaMouseUp(event){
        setTimeout(() => {
            const selectedText = window.getSelection().toString().trim();
        if(selectedText.length){
            const x = event.pageX;
            const y = event.pageY;
            const highlightButtonWidth =Number(getComputedStyle(highlightButton).width.slice(0,-2));
            const highlightButtonHeight =Number(getComputedStyle(highlightButton).height.slice(0,-2));
            highlightButton.style.left=`${x-highlightButtonWidth*0.5}px`;
            highlightButton.style.top=`${y-highlightButtonHeight*1.25}px`;
            highlightButton.style.display="block";
            deHighlightButton.style.left=`${x-highlightButtonWidth*0.5*2}px`;
            deHighlightButton.style.top=`${y-highlightButtonHeight*1.25}px`;
            deHighlightButton.style.display="block";
            dehighlightAllButtton.style.left=`${x-highlightButtonWidth*0.5*3}px`;
            dehighlightAllButtton.style.top=`${y-highlightButtonHeight*1.25}px`;
            dehighlightAllButtton.style.display="block";
            
        };
        }, 0);
        
    }

    function documentMouseDown(event) {
        if (getComputedStyle(highlightButton).display==="block" && event.target.id!=="#highlight-btn") {
            highlightButton.style.display="none";
            deHighlightButton.style.display="none";
            dehighlightAllButtton.style.display="none";
            window.getSelection().empty();
        }
        
    }


}

export const handleHighlight = () => {
    const highlightColor = 'yellow'; // You can change this color as per your preference
  
    // Get the selected text
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) {
        // No valid text selection is present, so you shouldn't perform the highlight action
        return;
      }
    const selectedRange = selection.getRangeAt(0);
    const selectedText = selectedRange.toString();
  
    if (selectedText.length) {
      // Create a new span element to wrap the selected text and apply the highlight
      const highlightSpan = document.createElement('span');
      highlightSpan.style.backgroundColor = highlightColor;
      highlightSpan.innerText = selectedText;
  
      // Replace the selected text with the highlighted span
      selectedRange.deleteContents();
      selectedRange.insertNode(highlightSpan);
  
      // Clear the selection
      selection.removeAllRanges();
  
      // You can store the highlighted text or perform any other operations here
    }
  
    
  };

  export const handleDehighlight = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount || selection.isCollapsed) {
      // No valid text selection is present, so you shouldn't perform the dehighlight action
      return;
    }
  
    const selectedRange = selection.getRangeAt(0);
    const selectedText = selectedRange.toString();
  
    if (selectedText.length) {
      // Find the parent element that contains the selected range
      const parentElement = selectedRange.commonAncestorContainer.parentElement;
  
      // Check if the parent element is a <span> element and has the highlight style
      if (parentElement.tagName === 'SPAN' && parentElement.style.backgroundColor === 'yellow') {
        // Split the text node containing the highlighted text
        const textNode = selectedRange.startContainer;
        const beforeText = textNode.textContent.slice(0, selectedRange.startOffset);
        const afterText = textNode.textContent.slice(selectedRange.endOffset);
  
        // Create a new text node for the unhighlighted part
        const unhighlightedTextNode = document.createTextNode(beforeText + selectedText + afterText);
  
        // Replace the <span> element with the new text node
        parentElement.parentNode.replaceChild(unhighlightedTextNode, parentElement);
      }
  
      // Clear the selection
      selection.removeAllRanges();
    }
  };

  export const dehighlightAll = () => {
    const highlightedSpans = document.querySelectorAll('.reading-passage-container');
  
    highlightedSpans.forEach((highlightedSpan) => {
      // Check if the background color is set to 'yellow'
      if (highlightedSpan.style.backgroundColor === 'yellow') {
        const parentElement = highlightedSpan.parentElement;
        const textNode = document.createTextNode(highlightedSpan.innerText);
  
        parentElement.replaceChild(textNode, highlightedSpan);
      }
    });
  };

  export const searchOnGoogle = () => {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
      const selectedText = selection.toString();
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
      window.open(googleSearchUrl, '_blank');
    }
  };
  
  
  
  
  
  
