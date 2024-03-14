import { useState } from "react";

interface ReturnTypes {
  likeCount: number;
  selectedTag: string;
  handleTag: (tag: string) => void;
  handleLikeCount: () => void;
}

export default function useBlogsList(): ReturnTypes {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const handleLikeCount = (): void => {
    setLikeCount((prev) => prev + 1);
  };
  const handleTag = (tag: string) => {
    console.log(tag);
    setSelectedTag(tag);
  };

  return { likeCount, selectedTag, handleTag, handleLikeCount };
}
