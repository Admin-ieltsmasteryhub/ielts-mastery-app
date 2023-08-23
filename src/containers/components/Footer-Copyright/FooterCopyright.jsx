import React from "react";
import "./footer-copyright.css";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-copyright">
      <p>&copy; {currentYear} IELTS Mastery Hub. All rights reserved.</p>
    </div>
  );
};

export default FooterCopyright;
