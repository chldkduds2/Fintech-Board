import React from "react";
import * as S from "./style";
import { usePagination } from "@/hooks/Home/PostsContainer/usePagination";
import {
  Post,
  PostContainerProps,
} from "@/types/Home/PostsContainer/postContainer.type";
import { Link } from "react-router-dom";
import usePostSorting from "@/hooks/Home/PostsContainer/usePostSorting";

const PostContainer = ({ searchTerm }: PostContainerProps) => {
  const {
    currentItems: currentPosts,
    totalPages,
    handlePageChange,
    currentPage,
  } = usePagination<Post>(6, searchTerm);

  const { sortedPosts, sortOption, setSortOption } = usePostSorting(
    currentPosts,
    searchTerm,
  );

  return (
    <S.PostsLayout>
      <S.PostsHeader>
        <S.PostsTitle>📝 금융리뷰를 제공해드려요!</S.PostsTitle>
        <S.SortControls>
          <S.SortButton
            className={sortOption === "date" ? "active" : ""}
            onClick={() => setSortOption("date")}
          >
            최신순
          </S.SortButton>
          <S.SortButton
            className={sortOption === "rating" ? "active" : ""}
            onClick={() => setSortOption("rating")}
          >
            평점순
          </S.SortButton>
        </S.SortControls>
      </S.PostsHeader>

      {sortedPosts.length === 0 ? (
        <S.CenteredPostList>
          <S.NoPosts>업로드된 게시물이 없습니다.</S.NoPosts>
        </S.CenteredPostList>
      ) : (
        <S.PostsGrid>
          {sortedPosts.map((post) => {
            const formattedDate = post.date.slice(0, 10);
            const rating = Number(post.rating);
            const starRating = "★".repeat(Math.round(rating));
            return (
              <S.PostCard key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <S.PostImage
                    src={`http://localhost:8080/uploads/${post.image}`}
                    alt={post.title}
                  />
                  <S.PostMeta>{`${post.author} 님 - ${formattedDate}`}</S.PostMeta>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostContent>{post.content}</S.PostContent>
                  <S.PostFooter>
                    <S.PostHashtags>{post.hashtags.join(" ")}</S.PostHashtags>
                    <S.PostRating>
                      <S.StarIcon>{starRating}</S.StarIcon> {rating.toFixed(1)}
                    </S.PostRating>
                  </S.PostFooter>
                </Link>
              </S.PostCard>
            );
          })}
        </S.PostsGrid>
      )}

      <S.Pagination>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <S.PaginationButton
            key={pageNumber}
            className={currentPage === pageNumber + 1 ? "active" : ""}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </S.PaginationButton>
        ))}
      </S.Pagination>
    </S.PostsLayout>
  );
};

export default PostContainer;