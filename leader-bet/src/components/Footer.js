import React from "react";

function Footer() {
  
  const footerStyle = {
   marginTop:"10px"
  }

  return (
    <React.Fragment>
      <footer className="page-footer font-small blue" style={footerStyle}>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
          <a href="/">LeaderBet</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;