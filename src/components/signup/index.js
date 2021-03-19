import React, { useState } from "react";
import {
  auth,
  generateUserDocument,
  signInWithGoogle,
} from "../../firebase/firebase";
import {
  Container,
  Error,
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
  SubContainer,
  SubTitle,
  Title,
} from "./signup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

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
      <SubContainer>
        <Title>Sign Up</Title>
        {error !== null && <Error>{error}</Error>}
        <FormContainer>
          <FormLabel htmlFor="displayName">Display Name:</FormLabel>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            placeholder=""
            id="displayName"
            onChange={(event) => onChangeHandler(event)}
          />
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
              createUserWithEmailAndPasswordHandler(event, email, password);
            }}
          >
            Sign up
          </FormButton>
        </FormContainer>
        <p>or</p>
        <FormButton
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("Error signing in with Google", error);
            }
          }}
        >
          Sign In with Google
        </FormButton>
        <SubTitle>
          Already have an account? <a href="/">Sign in here.</a>
        </SubTitle>
      </SubContainer>
    </Container>
  );
};
export default SignUp;
