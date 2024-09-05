import React from "react";
import * as S from "./style";
import useEditPostForm from "@/hooks/Register/EditRegister/useEditForm";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? parseInt(id, 10) : 0;
  const {
    formData,
    handleInputChange,
    handleImageChange,
    handleSubmit,
    imagePreview,
    isFormValid,
  } = useEditPostForm(postId);

  return (
    <S.PageContainer>
      <S.Title>✍️ 게시물 수정</S.Title>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.InputLabel>금융상품명</S.InputLabel>
        <S.TextInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />

        <S.InputLabel>설명</S.InputLabel>
        <S.TextArea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          rows={6}
          placeholder="설명을 입력해주세요"
        />

        <S.InputLabel>해시태그</S.InputLabel>
        <S.TextInput
          type="text"
          name="hashtags"
          value={formData.hashtags}
          onChange={handleInputChange}
          placeholder="해시태그를 쉼표로 구분하여 입력해주세요"
        />

        <S.RatingContainer>
          <S.RatingLabel>별점:</S.RatingLabel>
          <S.RatingInput
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            placeholder="1에서 5 사이의 값을 입력해주세요"
            min={1}
            max={5}
          />
        </S.RatingContainer>

        {imagePreview && (
          <S.ImagePreview src={imagePreview} alt="게시물 이미지 미리보기" />
        )}
        <S.FileInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <S.SubmitButton type="submit" $isFormValid={isFormValid}>
          수정하기
        </S.SubmitButton>
      </S.FormContainer>
    </S.PageContainer>
  );
};

export default EditPost;
