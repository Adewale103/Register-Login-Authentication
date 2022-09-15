import React from "react";
import { useNavigate } from "react-router-dom";
import "../auth/auth.css";

const Register = () => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <section>
      <main>
        <h1>Register</h1>
        <form action="">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter Username..." />
          <p>username is required</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
          />
          <p>password too short</p>

          <label htmlFor="confirmPas">Confirm Password</label>
          <input
            type="password"
            name="confirmPas"
            placeholder="Confirm Password..."
          />
          <p>wrong password</p>

          <button onClick={handleSubmit}>Submit</button>
        </form>
        <p>
          Already registered? <span onClick={handleSubmit}>Log in</span>
        </p>
      </main>
    </section>
  );
};

export default Register;
