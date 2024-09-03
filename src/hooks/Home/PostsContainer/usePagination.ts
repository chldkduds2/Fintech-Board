import { useState, useEffect } from "react";
import axios from "axios";

export const usePagination = <T>(itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  axios.defaults.baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/posts");
        const fetchedItems: T[] = response.data;
        setItems(fetchedItems);
        setTotalPages(Math.ceil(fetchedItems.length / itemsPerPage));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, [itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    handlePageChange,
  };
};
