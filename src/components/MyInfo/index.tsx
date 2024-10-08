import React from "react";
import { Link } from "react-router-dom";
import { useMyInfo } from "@/hooks/MyInfo/useMyInfo";
import * as S from "./style";

const MyInfo = () => {
  const { userNickname, posts, loading, error, deletePost } = useMyInfo();

  const handleDelete = async (postId: number) => {
    if (window.confirm("정말로 이 게시물을 삭제하시겠습니까?")) {
      try {
        await deletePost(postId);
      } catch (err) {
        console.error("Failed to delete post:", err);
      }
    }
  };

  return (
    <S.PageContainer>
      <S.UserInfo>
        <S.UserName>💼 {userNickname} 님의 활동</S.UserName>
      </S.UserInfo>
      {posts.length === 0 ? (
        <S.CenteredPostList>
          <S.NoPosts>작성한 게시물이 없습니다.</S.NoPosts>
        </S.CenteredPostList>
      ) : (
        <S.PostList>
          {posts.map((post) => {
            const rating = Number(post.rating);
            const starRating = "★".repeat(Math.round(rating));
            return (
              <S.PostItem key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <S.PostImage
                    src={`http://localhost:8080/uploads/${post.image}`}
                    alt={post.title}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <S.PostTitle>{post.title}</S.PostTitle>
                    <S.PostRating>
                      <S.StarIcon>{starRating}</S.StarIcon> {rating.toFixed(1)}
                    </S.PostRating>
                  </div>
                  <S.PostContent>{post.content}</S.PostContent>
                </Link>
                <S.PostFooter>
                  <S.PostHashtags>{post.hashtags.join(" ")}</S.PostHashtags>
                  <S.ActionButtons>
                    <S.EditButton>
                      <Link to={`/edit/${post.id}`}>수정</Link>
                    </S.EditButton>
                    <S.DeleteButton onClick={() => handleDelete(post.id)}>
                      삭제
                    </S.DeleteButton>
                  </S.ActionButtons>
                </S.PostFooter>
              </S.PostItem>
            );
          })}
        </S.PostList>
      )}
    </S.PageContainer>
  );
};

export default MyInfo;