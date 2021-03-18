import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
  font-size: 16px;
  padding: 20px;
  background-color: #181818;
`;

export const Text = styled.div`
  font-size: 16px;
  padding-top: 16px;
  padding-right: 6px;
`;

export const Icon = styled.a`
  padding: 6px;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
`;

export const TabHeading = styled.p`
  font-size: 24px;
  color: white;
`;

export const TabItem = styled.a`
  font-size: 20px;
  color: #555;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export const Info = styled.div`
  font-size: 24px;
`;
