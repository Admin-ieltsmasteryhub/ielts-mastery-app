import { useEffect, useRef } from "react";

export default function PdfViewerComponent(props) {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
//defaultToolbarItems.push(customItem); // This `useRef` instance will render the PDF.

    let PSPDFKit, instance;
    
    (async function () {
      PSPDFKit = await import("pspdfkit")

		PSPDFKit.unload(container) // Ensure that there's only one PSPDFKit instance.

      instance = await PSPDFKit.load({
        // Container where PSPDFKit should be mounted.
        container,
        // The document to open.
        document: props.document, 
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/${process.env.PUBLIC_URL}`,
        renderPageCallback(ctx, pageIndex, pageSize) {
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, pageSize.width, 100); // Adjust the width and height as needed

          // Add text inside the rectangle
          // ctx.font = '16px Arial';
          // ctx.fillStyle = 'white';
          // ctx.textAlign = 'center';
          // ctx.fillText(
          //   `Watermark - Page ${pageIndex + 1}`,
          //   pageSize.width / 2,
          //   30 // Adjust the Y-coordinate to center text vertically
          // );
        },
      });

	    const items = PSPDFKit.defaultToolbarItems;
console.log(items);
const itemsToInclude = ["highlighter", "ink","zoom-mode","note","ink-eraser"];
instance.setToolbarItems((currentItems) => {
  return currentItems.filter((item) => itemsToInclude.includes(item.type));
});

      const getFormFieldsValues = async () => {
        if (instance) {
          try {
            const formFieldValues = await instance.getFormFieldValues();
            console.log("Form Field Values:", formFieldValues);
            return formFieldValues;
          } catch (error) {
            console.error("Error getting form field values:", error);
          }
        } else {
          console.error("PSPDFKit is not loaded yet.");
        }
      };

      if (props.setRef) {
        props.setRef({ getFormFieldsValues });
      }
    })();

    
    
    return () => PSPDFKit && PSPDFKit.unload(container)
  }, []);

  
  
  // This div element will render the document to the DOM.
  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />
}
