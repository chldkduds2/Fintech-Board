import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EditFormData } from "@/types/Register/EditRegister/editRegister.type";

const useEditPostForm = (postId: number) => {
  const [formData, setFormData] = useState<EditFormData>({
    title: "",
    content: "",
    hashtags: "",
    rating: 0,
    image: null,
  });
  const [originalData, setOriginalData] = useState<EditFormData | null>(null); // 원본 데이터를 저장할 상태
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const apiBaseUEL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(`${apiBaseUEL}/api/posts/post/${postId}`);
        const post = await response.json();
        const postData = {
          title: post.title,
          content: post.content,
          hashtags: post.hashtags.join(","),
          rating: post.rating,
          image: post.image,
        };
        setFormData(postData);
        setOriginalData(postData); // 원본 데이터를 저장
        setImagePreview(`${apiBaseUEL}/uploads/${post.image}`);
      } catch (error) {
        console.error("Failed to fetch post data:", error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  useEffect(() => {
    const { title, content, hashtags, rating } = formData;
    setIsFormValid(!!title && !!content && !!hashtags && rating > 0);
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      
      // 필드별로 값이 변경되지 않았다면 원본 데이터를 사용
      formDataObj.append("title", formData.title || originalData?.title || "");
      formDataObj.append("content", formData.content || originalData?.content || "");
      formDataObj.append("hashtags", formData.hashtags || originalData?.hashtags || "");
      formDataObj.append("rating", (formData.rating || originalData?.rating)?.toString() || "0");
      
      // 이미지가 변경되지 않았다면 원본 이미지 파일 이름만 전송
      if (formData.image) {
        formDataObj.append("image", formData.image);
      } else if (originalData?.image) {
        formDataObj.append("existingImage", originalData.image); // 기존 이미지를 보냄
      }

      const response = await fetch(
        `${apiBaseUEL}/api/posts/${postId}`,
        {
          method: "PUT",
          body: formDataObj,
        }
      );

      if (response.ok) {
        navigate(`/post/${postId}`);
      } else {
        console.error("Failed to update the post");
      }
      alert("게시물이 성공적으로 수정되었습니다.");
      navigate("/myInfo");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
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

export default useEditPostForm;
