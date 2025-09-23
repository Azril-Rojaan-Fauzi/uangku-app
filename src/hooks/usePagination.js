import { useState } from "react";

const usePagination = (pageData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = pageData.slice(firstPostIndex, lastPostIndex);

  return { currentPosts, postsPerPage, setCurrentPage, currentPage };
};

export default usePagination;
