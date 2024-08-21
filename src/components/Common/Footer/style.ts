import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: lightGray;
  border-top: 1px solid lightgrey;
  background-color: ${({ theme }) => theme.colors.gray800};

  position: fixed;
  bottom: 0;
  left: 0;
`;

export const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;
