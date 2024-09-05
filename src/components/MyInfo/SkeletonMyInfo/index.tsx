import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../style"


const SkeletonNavBar = () => {
  return(      
    <S.PageContainer>
    <S.UserInfo>
      <S.UserName>
        <Skeleton width={150} />
      </S.UserName>
    </S.UserInfo>
    <S.PostList>
      {Array.from({ length: 3 }).map((_, index) => (
        <S.PostItem key={index}>
          <Skeleton height={200} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Skeleton width={200} />
            <Skeleton width={50} />
          </div>
          <Skeleton count={3} />
        </S.PostItem>
      ))}
    </S.PostList>
  </S.PageContainer>
  )

}
 export default SkeletonNavBar;