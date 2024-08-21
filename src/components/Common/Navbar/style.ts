import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white100};
  border-bottom: 0.09rem solid lightgray;
`;

export const NavbarContants = styled.div`
  display: flex;
  align-items: center;
  width: 83%;
  height: 70%;
  font-size: 1rem;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const NavbarItem = styled.div`
  margin-left: 3rem;
  position: relative;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize};

    &:hover {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.colors.blue500};
      text-decoration-thickness: 0.2rem;
      text-underline-offset: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue500};
    }
  }
`;

export const NavbarItemRight = styled(NavbarItem)`
  &:last-child {
    margin-left: 0rem;
  }
`;

export const Separator = styled.span`
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors.gray800};
  font-size: 1.3rem;
`;
