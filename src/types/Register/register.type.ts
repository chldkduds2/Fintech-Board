export interface RegisterContentsFormData {
  title: string;
  author: string;
  date: string;
  content: string;
  hashtags: string;
  rating: string;
  image: File | null;
}
