import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  margin-bottom: 13.8rem;
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
  margin-bottom: 2rem;
`;

export const UserName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black900};
  margin-bottom: 1.5rem;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 2rem;
`;

export const PostItem = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }
`;
export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
`;

export const PostTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black900};
  margin: 0.5rem 0;
  flex: 1;
`;
export const PostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray700};
  flex-grow: 1;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const PostHashtags = styled.div`
  color: ${({ theme }) => theme.colors.blue500};
`;

export const PostRating = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  margin-left: 1rem;
  margin-top: 0.8rem;
`;

export const StarIcon = styled.span`
  color: #f39c12;
  margin-right: 0.3125rem;
  font-size: 1.2rem;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const EditButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    background: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #c82333;
  }
`;

export const NoPosts = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 2rem;
  padding: 8.5rem;
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 23rem;
  margin-bottom: 25rem;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};
`;
