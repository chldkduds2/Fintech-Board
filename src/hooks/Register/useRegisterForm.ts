import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { RegisterContentsFormData } from "@/types/Register/register.type";
import useKakaoAuth from "@/hooks/kaKaoAuth/useKaKaoAuth";
import { useNavigate } from "react-router-dom";

const useRegisterForm = () => {
  const { userNickname } = useKakaoAuth();
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState<RegisterContentsFormData>({
    title: "",
    author: userNickname || "",
    date: getCurrentDate(),
    content: "",
    hashtags: "",
    rating: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      author: userNickname || "Anonymous",
    }));
  }, [userNickname]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    validateForm(updatedFormData);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const updatedFormData = { ...formData, image: file };
    setFormData(updatedFormData);
    setImagePreview(file ? URL.createObjectURL(file) : null);
    validateForm(updatedFormData);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append("title", formData.title);
    form.append("author", formData.author);
    form.append("date", formData.date);
    form.append("content", formData.content);

    const hashtagsWithHash = formData.hashtags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)
      .map((tag) => `#${tag}`)
      .join(", ");
    form.append("hashtags", hashtagsWithHash);

    form.append("rating", formData.rating);
    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/posts",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Form data submitted:", response.data);
      alert("게시물이 성공적으로 등록되었습니다.");
      setFormData({
        title: "",
        author: "",
        date: getCurrentDate(),
        content: "",
        hashtags: "",
        rating: "",
        image: null,
      });
      setImagePreview(null);
      navigate("/myInfo");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("게시물 등록에 실패했습니다.");
    }
  };

  const validateForm = (updatedFormData: typeof formData) => {
    const isValid =
      updatedFormData.title.trim() !== "" &&
      updatedFormData.content.trim() !== "" &&
      updatedFormData.hashtags.trim() !== "" &&
      updatedFormData.rating.trim() !== "" &&
      updatedFormData.image !== null;
    setIsFormValid(isValid);
  };

  return {
    formData,
    handleInputChange,
    handleImageChange,
    handleSubmit,
    imagePreview,
    isFormValid,
  };
};

export default useRegisterForm;
