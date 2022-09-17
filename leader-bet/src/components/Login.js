import React from "react";

function Login() {

  const loginStyle = {
    width:"250px"
  }

  const marginTop = {
    marginTop:"250px"
  }

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center" style={marginTop}>
        <div style={loginStyle} className="text-center">
          <h3 className="mb-3">Login</h3>
          <form className="form">
              <div className="mb-3">
                <input type="email" className="form-control col-xs-3" id="exampleInputEmail1" size="50" aria-describedby="emailHelp" placeholder="email"></input>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"></input>
              </div>
            <button type="submit" className="btn btn-outline-primary">Login</button>
            </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;