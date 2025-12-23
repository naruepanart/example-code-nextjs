"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PageComponent from "@/components/PageComponent";

const CsrPageComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const nextPage = Math.floor(data.length / 10) + 1;
      const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${nextPage}&_limit=10`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPosts = await response.json();

      if (newPosts.length === 0) {
        setHasMore(false);
        return;
      }

      setData((prev) => [...prev, ...newPosts]);
      setCurrentPage((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      fetchPosts();
    }
  }, [inView]);

  return (
    <>
      {data.map((data) => (
        <PageComponent key={data.id} posts={data} link={`/csr`} />
      ))}
      <div ref={ref} />
    </>
  );
};

export default CsrPageComponent;
