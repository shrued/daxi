import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { Container, FormContainer, SubContainer } from "./signin";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <h1>Sign In</h1>
      <SubContainer>
        {error !== null && <div>{error}</div>}
        <FormContainer>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder=""
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword">Password:</label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder=""
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <button
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </button>
        </FormContainer>
        <p>or</p>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a> <br />{" "}
          {/* <a
            href="/passwordReset"
            className="text-blue-500 hover:text-blue-600"
          >
            Forgot Password?
          </a> */}
        </p>
      </SubContainer>
    </Container>
  );
};
export default SignIn;
