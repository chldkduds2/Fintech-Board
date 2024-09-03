import { useState, useEffect } from "react";
import axios from "axios";

export const usePagination = <T>(itemsPerPage: number, searchTerm: string) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentItems, setCurrentItems] = useState<T[]>([]);

  axios.defaults.baseURL = "http://localhost:8080";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/posts");
        const fetchedItems: T[] = response.data;
        setItems(fetchedItems);
        setTotalPages(Math.ceil(fetchedItems.length / itemsPerPage));
        setCurrentItems(fetchedItems.slice(0, itemsPerPage));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchData();
  }, [itemsPerPage]);

  useEffect(() => {
    if (searchTerm) {
      setCurrentItems(items);
      setTotalPages(0);
      setCurrentPage(1);
    } else {
      
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(items.slice(indexOfFirstItem, indexOfLastItem));
      setTotalPages(Math.ceil(items.length / itemsPerPage));
    }
  }, [searchTerm, items, currentPage, itemsPerPage]);

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