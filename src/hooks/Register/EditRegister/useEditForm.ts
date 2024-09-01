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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/posts/post/${postId}`
        );
        const post = await response.json();
        setFormData({
          title: post.title,
          content: post.content,
          hashtags: post.hashtags.join(","),
          rating: post.rating,
          image: post.image,
        });
        setImagePreview(`http://localhost:8080/uploads/${post.image}`);
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
      formDataObj.append("title", formData.title);
      formDataObj.append("content", formData.content);
      formDataObj.append("hashtags", formData.hashtags);
      formDataObj.append("rating", formData.rating.toString());
      if (formData.image) {
        formDataObj.append("image", formData.image);
      }

      const response = await fetch(
        `http://localhost:8080/api/posts/${postId}`,
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
