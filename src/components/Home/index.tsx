import React, { useState } from "react";
import * as S from "./style";
import PostContainer from "./PostsContainer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <S.HomeContainer>
      <S.BannerSection>
        <S.BannerImage />
        <S.BannerContent>
          <S.Slogan>
            최고의 금융 상품을 찾는 여정 🚀
            <br />
            핀다와 함께
          </S.Slogan>
          <S.SearchInputWrapper>
            <S.SearchIcon />
            <S.SearchInput
              placeholder="금융상품 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </S.SearchInputWrapper>
        </S.BannerContent>
      </S.BannerSection>
      <PostContainer searchTerm={searchTerm} />
    </S.HomeContainer>
  );
};

export default Home;
