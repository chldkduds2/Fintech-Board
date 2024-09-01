import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9vw;
  color: ${({ theme }) => theme.colors.white100};
  border-top: 1px solid lightgrey;
  background-color: lightgray;
`;

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;
