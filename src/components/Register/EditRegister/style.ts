import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  margin-bottom: 8rem;
  width: 60%;
  max-width: 1200px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 0.063rem solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: 0.08rem solid ${({ theme }) => theme.colors.blue500};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 0.063rem solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: 0.08rem solid ${({ theme }) => theme.colors.blue500};
  }
`;

export const FileInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const SubmitButton = styled.button<{ isFormValid: boolean }>`
  display: flex;
  float: right;
  justify-content: center;
  padding: 1rem;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: ${({ isFormValid }) => (isFormValid ? "pointer" : "not-allowed")};
  background-color: ${({ theme, isFormValid }) =>
    isFormValid ? theme.colors.blue500 : "#ddd"};
  opacity: ${({ isFormValid }) => (isFormValid ? 1 : 0.5)};
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const RatingInput = styled.input`
  width: 8rem;
  padding: 0.7rem;
  border: 0.063rem solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-right: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: 0.08rem solid ${({ theme }) => theme.colors.blue500};
  }
`;

export const RatingLabel = styled.span`
  font-size: 1.125rem;
  color: #333;
  font-weight: bold;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 20rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;
