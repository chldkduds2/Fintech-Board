import { useState, useMemo } from "react";
import { Post } from "@/types/Home/PostsContainer/postContainer.type";


const usePostSorting = (posts: Post[], searchTerm: string) => {

  const [sortOption, setSortOption] = useState<"rating" | "date">("date");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(searchTerm));
  }, [posts, searchTerm]);


  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (sortOption === "rating") {
        return Number(b.rating) - Number(a.rating);
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [filteredPosts, sortOption]);

  return {
    sortedPosts, 
    sortOption,  
    setSortOption, 
  };
};

export default usePostSorting;