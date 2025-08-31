import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Dashboard from '../../components/Dashboard'; // Adjust the import path

function Account() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  
  const onhandleSignup = () => {
    navigate("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const response = await axios.post("http://localhost:3002/signup", {
        name,
        email,
        password,
      });
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Show success message (optional)
      console.log('Signup successful:', response.data.message);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred during signup";
      setError(errorMessage);
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <img
            src="media/images/account_open.svg"
            style={{ width: "75%", marginLeft: "100px" }}
            alt="Account Open"
          />
        </div>
        <div className="col-6">
          <h2 className="mt-5 mb-2">Signup now</h2>
          <p className="ls-des text-muted">Or track your existing application</p>
          {error && <div className="alert alert-danger">{error}</div>}
    

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Username is required</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">Please enter a valid email</div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">Password is required</div>
            </div>

            <button onClick={onhandleSignup} type="submit" className="btn btn-success mb-3">
              Sign Up
            </button>
          </form>
          <p className="text muted">Already have a Account</p>
          <Link to="/login" className="btn btn-success mb-3" onClick={onhandleSignup}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;