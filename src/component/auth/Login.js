import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-container">
      <div className="card login-card">
        <div className="card-body">
          <h2 className="text-center mb-4">
            <FaSignInAlt /> Signin
          </h2>
          <form>
            <div className="mb-1">
              <label htmlFor="email" className="form-label"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                style={{ fontSize: "12px" }} // Adjust the font size here
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                style={{ fontSize: "12px" }} // Adjust the font size here
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Signin
              </button>
            </div>
            <div className="text-center mt-3">
              <table className="table">
                <tbody>
                  <tr>
                    <td>
                      Not have an account?{" "}
                      <Link to="/registration" className="fw-semibold">
                        Registration
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#" className="text-decoration-none mt-2 d-block">
                        Forgot Password?
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>

          <div className="sign">
            <h10>Signin with</h10>
          </div>

          <div className="social-login">
            <button className="btn btn-google">
              <FaGoogle />
              <i className="fab fa-google"></i>Continue with Google
            </button>
            <button className="btn btn-facebook">
              <FaFacebook />
              <i className="fab fa-facebook-f"></i> Continue with Facebook
            </button>
            <button className="btn btn-linkedin">
              <FaLinkedin />
              <i className="fab fa-linkedin-in"></i> Continue with LinkedIn
            </button>
            <button className="btn btn-phone">
              <FaPhone />
              <i className="fas fa-phone"></i> Continue with Phone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
