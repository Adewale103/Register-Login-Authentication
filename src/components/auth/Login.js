import React from "react";
import { useNavigate } from "react-router-dom";
import "../auth/auth.css";

const Login = () => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <section>
      <main>
        <h1>Login</h1>
        <form action="">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter Username..." />
          <p>Username is required</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
          />
          <p>Password too short</p>

          <button>Submit</button>
        </form>
        <p>
          Not registered? <span onClick={handleSubmit}>Sign Up</span>
        </p>
      </main>
    </section>
  );
};

export default Login;
