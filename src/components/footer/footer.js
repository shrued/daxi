import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  color: black;
  font-size: 20px;
  padding: 5px 0;
  background-color: #996d94;
`;

export const Text = styled.div`
  font-size: 13px;
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
