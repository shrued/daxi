import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
    to right bottom,
    #d2e0dd,
    #c0dbd8,
    #acd6d6,
    #98d0d6,
    #83cad8
  );
  padding: 40px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 2px solid #181818;
  height: 100%;
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

export const BigText = styled.p`
  font-size: 34px;
  color: #181818;
  text-align: center;
`;

export const MediumText = styled.p`
  font-size: 26px;
  color: #181818;
  text-align: center;
  padding-top: 20px;
`;

export const Text = styled.p`
  color: #181818;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  margin: 25px;
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
  border: none;
  border-radius: 15px;
  color: #404353;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  font-size: 16px;
  line-height: 1.7em;
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

export const LastYear = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;

export const GetButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15px;
  color: #404353;
  align-self: center;
  font-size: 16px;
  line-height: 1.7em;
  margin-top: auto;
  padding: 5px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: auto;
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
