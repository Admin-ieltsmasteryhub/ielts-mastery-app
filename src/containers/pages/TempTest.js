import { useState } from "react";
import PdfViewerComponent from "../components/PdfViewerComponent";

function TempTest() {
  const [document, setDocument] = useState("sample.pdf");
  const [pdfViewerRef, setPdfViewerRef] = useState(null);

  const handleOpen = () => setDocument("another-example.pdf");

  const handleGetFormFieldsValues = () => {
    if (pdfViewerRef) {
      pdfViewerRef.getFormFieldsValues();
    }
  };

  return (
    <div className="App">
      <button className="App-button" onClick={handleOpen}>
        Open another document
      </button>
      <button className="App-button" onClick={handleGetFormFieldsValues}>
        Get Form Field Values
      </button>
      <div className="App-viewer">
        <PdfViewerComponent document={document} setRef={setPdfViewerRef} />
      </div>
    </div>
  );
}

export default TempTest;