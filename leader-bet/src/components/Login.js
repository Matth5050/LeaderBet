import React from "react";

function Login() {

  const cardWidth = {
    width: "18rem",
    marginTop: "250px"
  }

  return (
    <React.Fragment>
      <div>
        <div className="card text-center mx-auto p-3" style={cardWidth}>
          <div className="">
            <h3 className="mb-3 card-title">Login</h3>
            <form className="form">
                <div className="mb-3">
                  <input type="email" className="form-control col-xs-3" id="exampleInputEmail1" size="50" aria-describedby="emailHelp" placeholder="email"></input>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"></input>
                  <p className="small">forgot password?</p>
                </div>
              <button type="submit" className="btn btn-outline-primary">Login</button>
              </form>
          </div>
        </div>
        <p className="text-center mt-3">New to LeaderBet? Register an account here!</p>
      </div>
    </React.Fragment>
  );
};

//zz

export default Login;