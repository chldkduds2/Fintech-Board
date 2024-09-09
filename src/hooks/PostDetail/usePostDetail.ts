// hooks/usePostDetail.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "@/types/Home/PostsContainer/postsContainer.type";

export const usePostDetail = (postId: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiBaseUEL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${apiBaseUEL}/api/posts/post/${postId}`
        );
        setPost(response.data);
      } catch (err) {
        setError("Failed to fetch post details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  return { post, loading, error };
};
