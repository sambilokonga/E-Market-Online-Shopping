import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css";
const Signup = () => {
  return (
    <div className="authpage">
      <div className="authcont">
        <img
          src="/assets/images/istockphoto-1311600080-612x612.jpg"
          alt="signup"
        />

        <form className="authform">
          <h1>Signup</h1>
          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" />
            </div>
            <div className="formgroup">
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" />
            </div>
          </div>
          <div className="formgroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className="form-group-row">
            <div className="formgroup">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="formgroup">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" />
            </div>
          </div>

          <Link to="/login" className="stylenone">
            <p>Already have an account?</p>
          </Link>
          <Link to="/signup" className="stylenone">
            <button className="btn">Signup</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
