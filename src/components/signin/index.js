import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import {
  Container,
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
  SubContainer,
  SubTitle,
  Title,
} from "./signin";

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
      <SubContainer>
        <Title>Sign In</Title>
        {error !== null && <SubTitle>{error}</SubTitle>}
        <FormContainer>
          <FormLabel htmlFor="userEmail">Email:</FormLabel>
          <FormInput
            type="email"
            name="userEmail"
            value={email}
            placeholder=""
            id="userEmail"
            onChange={(event) => onChangeHandler(event)}
          />
          <FormLabel htmlFor="userPassword">Password:</FormLabel>
          <FormInput
            type="password"
            name="userPassword"
            value={password}
            placeholder=""
            id="userPassword"
            onChange={(event) => onChangeHandler(event)}
          />
          <FormButton
            onClick={(event) => {
              signInWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign in
          </FormButton>
        </FormContainer>
        <SubTitle>or</SubTitle>
        <FormButton
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </FormButton>
        <SubTitle>
          Don't have an account? <a href="/signup">Sign up here.</a> <br />{" "}
          <a href="/passwordReset">Forgot Password?</a>
        </SubTitle>
      </SubContainer>
    </Container>
  );
};
export default SignIn;
