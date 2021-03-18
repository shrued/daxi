import styled from "styled-components/macro";

export const HeaderContainer = styled.div`
  background-color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Logo = styled.p`
  margin: 10px;
  padding-left: 20px;
`;

export const NavItem = styled.div`
  transition: all 500ms ease-in-out;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 130px;
  position: relative;
  margin: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #add8e6;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: left;
    padding-left: 10px;
    width: 100%;
  }
`;

export const NavDropItem = styled.div`
  transition: all 500ms ease-in-out;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 180px;
  position: relative;
  margin: 10px;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #add8e6;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: left;
    padding-left: 10px;
    width: 100%;
  }
`;
