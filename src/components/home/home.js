import styled from "styled-components/macro";

export const CloudWave = styled.div`
  position: relative;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ");
`;

export const WaveContent = styled.div`
  height: 600px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
  color: white;
  font-size: 3.76rem;
`;

export const Hello = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  padding: 40px;
  font-style: italic;
`;

export const Placard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 40px;
`;

export const Tenets = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`;

export const SignOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;
`;

export const MediumText = styled.p`
  font-size: 20px;
  color: #181818;
  text-align: center;
  padding-top: 20px;
`;

export const SignOutButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 15px;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  align-self: center;
  font-size: 16px;
  line-height: 1.7em;
  margin-top: auto;
  padding: 5px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  width: 120px;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: black;
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
