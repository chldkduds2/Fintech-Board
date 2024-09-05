import React from 'react';
import * as S from "./style"
import Skeleton from "react-loading-skeleton";

const SkeletonLoader  = () => {
  return (
    <S.SkeletonWrapper>
      <Skeleton width={1500} height={850} />
    </S.SkeletonWrapper>
  );
};

export default SkeletonLoader;