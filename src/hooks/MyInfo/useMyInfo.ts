import { useState, useEffect, useCallback } from "react";
import useKakaoAuth from "@/hooks/KaKaoAuth/useKaKaoAuth";
import axios from "axios";
import { Post } from "@/types/Home/PostsContainer/postContainer.type";

export const useMyInfo = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { userNickname } = useKakaoAuth();

  const fetchPosts = useCallback(async () => {
    if (!userNickname) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/posts/author/${encodeURIComponent(
          userNickname
        )}`
      );
      setPosts(response.data);
    } catch (err) {
      setError("Failed to fetch posts.");
    } finally {
      setLoading(false);
    }
  }, [userNickname]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const deletePost = async (postId: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`);

      fetchPosts();
      alert("게시물이 삭제되었습니다.");
    } catch (err) {
      setError("Failed to delete post.");
      alert("게시물 삭제에 실패했습니다.");
    }
  };

  return { userNickname, posts, loading, error, deletePost };
};
