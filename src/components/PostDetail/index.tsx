import React from "react";
import { useParams } from "react-router-dom";
import { usePostDetail } from "@/hooks/PostDetail/usePostDetail";
import * as S from "./style";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePostDetail(id || "");

  if (loading) return <S.Loading>로딩 중...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;
  if (!post) return <S.NoPost>게시물이 없습니다.</S.NoPost>;

  const rating = Number(post.rating);
  const starRating = "★".repeat(Math.round(rating));

  return (
    <S.PageContainer>
      <S.Title>{post.title}</S.Title>
      <S.Author>작성자: {post.author || "익명"}</S.Author>
      <S.Date>작성일: {new Date(post.date).toLocaleDateString()}</S.Date>

      <S.BottomSection>
        <S.Hashtags>
          {post.hashtags.map((tag, index) => (
            <S.Hashtag key={index}>{tag}</S.Hashtag>
          ))}
        </S.Hashtags>
        <S.Rating>
          <S.StarIcon>{starRating}</S.StarIcon> {rating.toFixed(1)}
        </S.Rating>
      </S.BottomSection>
      {post.image && (
        <S.Image
          src={`http://localhost:8080/uploads/${post.image}`}
          alt={post.title}
        />
      )}
      <S.Content>{post.content}</S.Content>
    </S.PageContainer>
  );
};

export default PostDetail;
