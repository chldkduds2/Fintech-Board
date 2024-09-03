import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import MainBannerImg from "@/assets/mainBannerImg.svg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BannerSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BannerImage = styled(MainBannerImg)`
  width: 100%;
  height: auto;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Slogan = styled.h1`
  margin-bottom: 1%;
  color: ${({ theme }) => theme.colors.white100};
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 3.625vw;
  font-weight: 600;
  line-height: normal;
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  top: 50%;
  left: 1.4vw;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.white100};
  font-size: 2.3vw;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 21.3125vw;
  height: 4.25vw;
  margin-top: 1.5vw;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.5vw 2.5vw 0.5vw 4.8vw;
  font-size: 1.4vw;
  font-weight: 450;
  border: none;
  border-radius: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
  color: ${({ theme }) => theme.colors.white100};
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: ${({ theme }) => theme.colors.white100};
  }
`;
