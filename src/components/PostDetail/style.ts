import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 4rem auto 4rem auto;

  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;

  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black900};
  margin-bottom: 1.5rem;
`;

export const Author = styled.p`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const Date = styled.p`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray800};
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-top: 20px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Hashtags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Hashtag = styled.span`
  background: #f1f1f1;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.blue500};
  border: 2px solid ${({ theme }) => theme.colors.blue500};
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #ddd;
    color: #333;
  }
`;

export const Rating = styled.p`
  font-size: 1.1rem;
  color: #333;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled.span`
  color: #f39c12;
  margin-right: 5px;
  font-size: 1.2rem;
`;

export const NoPost = styled.p`
  font-size: 1.2rem;
  color: #777;
  text-align: center;
  margin-top: 40px;
`;

export const Loading = styled.div`
  font-size: 1.2rem;
  color: #000;
  text-align: center;
  margin-top: 40px;
`;

export const Error = styled.div`
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 40px;
`;
