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

export const ArticleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-content: center;
`;
