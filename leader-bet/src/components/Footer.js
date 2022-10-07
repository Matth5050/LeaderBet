import React from "react";

function Footer() {
  
  const footerStyle = {
    marginTop: "10px"
  }

  const textStyle = {
    color: "grey"
  }

  return (
    <React.Fragment>
      <footer className="page-footer font-small blue" style={footerStyle}>
        <div className="footer-copyright text-center py-3" style={textStyle}>
          <span style={textStyle}>© 2022 Copyright LeaderBet</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;