import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #d2e0dd,
    #c0dbd8,
    #acd6d6,
    #98d0d6,
    #83cad8
  );
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: white;
  height: 100%;
  width: 30%;
  padding: 30px;
  margin: 40px;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const Title = styled.p`
  font-weight: 200;
  text-align: center;
  font-size: 40px;
  font-size: 2.5rem;
  letter-spacing: 0px;
  letter-spacing: 0.05rem;
  color: #404353;
`;

export const SubTitle = styled.p`
  text-align: center;
  line-height: 1em;
  font-weight: 100;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
  color: #404353;

  a {
    text-decoration: none !important;
    color: #181818;
  }
`;

export const Text = styled.p`
  a {
    text-decoration: none !important;
    color: #181818;
  }
`;

export const Error = styled.p`
  text-align: center;
  line-height: 1em;
  font-weight: 100;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
  color: #e45151;
`;

export const Success = styled.p`
  text-align: center;
  line-height: 1em;
  font-weight: 100;
  letter-spacing: 0px;
  letter-spacing: 0.02rem;
  color: #5dbe5d;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const FormLabel = styled.label`
  color: #404353;
`;

export const FormInput = styled.input`
  border: none;
  background: none;
  margin-bottom: 10px;
  line-height: 2em;
  color: black;
  font-weight: lighter;
  font-size: 1.2rem;
  border-bottom: 1px solid rgb(64, 67, 83, 0.65);
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  cursor: pointer;
  border: 1px solid #404353;
  border-radius: 25px;
  color: #404353;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  font-size: 19px;
  line-height: 2em;
  margin-top: auto;
  margin-bottom: 15px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 100%;
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.75);
    color: white;
  }
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
