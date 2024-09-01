import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black900};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: left;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: auto;
  }
`;
