import React, { useState } from "react";
import { Container, FormContainer, SubContainer } from "./signup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
  return (
    <Container>
      <h1>Sign Up</h1>
      <SubContainer>
        {error !== null && <div>{error}</div>}
        <FormContainer>
          <label htmlFor="displayName">Display Name:</label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder=""
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
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
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </button>
        </FormContainer>
        <p>or</p>
        <button>Sign In with Google</button>
        <p>
          Already have an account?
          <a href="/">Sign in here</a>
        </p>
      </SubContainer>
    </Container>
  );
};
export default SignUp;
