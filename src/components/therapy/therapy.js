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

export const Title = styled.p`
  font-weight: 200;
  text-align: center;
  font-size: 40px;
  font-size: 2.5rem;
  letter-spacing: 0.05rem;
  color: #404353;
`;

export const SubTitle = styled.p`
  text-align: center;
  line-height: 1em;
  font-size: 19px;
  font-weight: 100;
  letter-spacing: 0.02rem;
  color: #404353;
`;

export const SubHeading = styled.p`
  text-align: center;
  font-style: italic;
  line-height: 1em;
  font-size: 26px;
  letter-spacing: 0.02rem;
  color: #404353;
`;

export const SubContent = styled.p`
  text-align: center;
  line-height: 1em;
  font-size: 19px;
  letter-spacing: 0.02rem;
  color: #404353;
`;

export const Counseling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CounselingCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: white;
  height: 100%;
  width: 80%;
  padding: 30px;
  margin: 40px;

  @media (max-width: 900px) {
    width: auto;
  }
`;

export const SideName = styled.a`
  font-size: 24px;
  text-decoration: none !important;
  color: #181818;
  cursor: pointer;

  &:hover {
    text-decoration: none !important;
    color: #181818;
  }
`;

export const SideCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideImage = styled.img`
  width: 200px;
`;

export const SideText = styled.div`
  padding: 20px;
`;
