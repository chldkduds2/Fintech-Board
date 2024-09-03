import styled from "styled-components";

export const PostsLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  width: 90%;
  max-width: 75rem;
`;

export const PostsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black900};
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-align: left;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(17.5vw, 1fr));
  gap: 2rem;
`;

export const PostsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SortControls = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SortButton = styled.button`
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.blue500};
  cursor: pointer;
  font-size: 1rem;
  border: 0.15rem solid ${({ theme }) => theme.colors.blue500};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;

  &.active {
    background: ${({ theme }) => theme.colors.blue500};
    color: ${({ theme }) => theme.colors.white100};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray100};
  }
`;

export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0.8rem 1.2rem rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black900};
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 13rem;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
`;

export const PostMeta = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 0.5rem;
`;

export const PostTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black900};
  margin: 0.5rem 0 0.5rem 0;
`;

export const PostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray700};
  flex-grow: 1;
  margin-bottom: 2rem;
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
  color: ${({ theme }) => theme.colors.blue500};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const StarIcon = styled.span`
  color: #f39c12;
  margin-right: 0.3125rem;
  font-size: 1.2rem;
`;

export const PaginationButton = styled.button`
  background: ${({ className, theme }) =>
    className === "active" ? theme.colors.blue500 : "transparent"};
  color: ${({ className, theme }) =>
    className === "active" ? theme.colors.white100 : theme.colors.blue500};
  border: 0.1rem solid ${({ theme }) => theme.colors.blue500};
  border-radius: 20%;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.blue500};
    color: #fff;
  }
`;

export const CenteredPostList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white100};
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;


export const NoPosts = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 2rem;
  padding: 8.5rem;
`;
