import React from "react";
import * as S from "./style";
import useRegisterForm from "@/hooks/Register/useRegisterForm";

const Register = () => {
  const {
    formData,
    handleInputChange,
    handleImageChange,
    handleSubmit,
    imagePreview,
    isFormValid,
  } = useRegisterForm();

  return (
    <S.PageContainer>
      <S.Title>✍️ 내 리뷰 작성</S.Title>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.InputLabel>금융상품명</S.InputLabel>
        <S.TextInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="게시물 제목을 입력하세요"
          required
        />

        <S.InputLabel>내용</S.InputLabel>
        <S.TextArea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="내용을 입력하세요"
          required
        />

        <S.InputLabel>해시태그</S.InputLabel>
        <S.TextInput
          type="text"
          name="hashtags"
          value={formData.hashtags}
          onChange={handleInputChange}
          placeholder="해시태그를 입력하세요 (쉼표로 구분)"
          required
        />

        <S.InputLabel>평점</S.InputLabel>
        <S.RatingContainer>
          <S.RatingInput
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="0 ~ 5점까지"
            step="0.1"
            min="1"
            max="5"
            required
          />
          <S.RatingLabel>{formData.rating || "0.0"}</S.RatingLabel>
        </S.RatingContainer>

        <S.InputLabel>이미지</S.InputLabel>
        <S.FileInput
          type="file"
          name="image"
          onChange={handleImageChange}
          required
        />
        {imagePreview && (
          <S.ImagePreview src={imagePreview} alt="이미지 미리보기" />
        )}

        <S.SubmitButton type="submit" isFormValid={isFormValid}>
          게시물 등록
        </S.SubmitButton>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default Register;
