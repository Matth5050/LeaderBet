import React from "react";

function Register() {

  const cardWidth = {
    width: "18rem",
    marginTop: "250px"
  }

  return (
    <React.Fragment>
      <div>
        <div className="card text-center mx-auto p-3" style={cardWidth}>
          <div className="">
            <h3 className="mb-3 card-title">Register</h3>
            <form className="form">
                <div className="mb-3">
                  <input type="email" className="form-control col-xs-3" id="exampleInputEmail1" size="50" aria-describedby="emailHelp" placeholder="email"></input>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"></input>
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="confirm password"></input>
                </div>
              <button type="submit" className="btn btn-outline-primary">Register</button>
              </form>
          </div>
        </div>
        <p className="text-center mt-3">Already have an account? Login here!</p>
      </div>
    </React.Fragment>
  );
};

export default Register;