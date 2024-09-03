export interface Post {
  id: number;
  image: string;
  title: string;
  author: string;
  date: string;
  content: string;
  hashtags: string[];
  rating: number;
}

export interface PaginationProps {
  items: Post[];
  itemsPerPage: number;
}

export interface PostContainerProps {
  searchTerm: string;
}
