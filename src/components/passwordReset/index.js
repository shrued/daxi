import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  Container,
  FormContainer,
  SubContainer,
  Title,
  Error,
  FormLabel,
  FormInput,
  FormButton,
  SubTitle,
} from "./passwordReset";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <Container>
      <SubContainer>
        <Title>Reset your Password</Title>
        <FormContainer action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <Error>{error}</Error>}
          <FormLabel htmlFor="userEmail">Email:</FormLabel>
          <FormInput
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <FormButton
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </FormButton>
        </FormContainer>
        <SubTitle>
          <a href="/">&larr; back to sign in page</a>
        </SubTitle>
      </SubContainer>
    </Container>
  );
};
export default PasswordReset;
