import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { Container, FormContainer, SubContainer } from "./passwordReset";

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
      <h1>Reset your Password</h1>
      <SubContainer>
        <FormContainer action="">
          {emailHasBeenSent && <div>An email has been sent to you!</div>}
          {error !== null && <div>{error}</div>}
          <label htmlFor="userEmail">Email:</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <button
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </button>
        </FormContainer>
        <a href="/">&larr; back to sign in page</a>
      </SubContainer>
    </Container>
  );
};
export default PasswordReset;
