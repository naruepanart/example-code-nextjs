"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PageComponent from "@/components/PageComponent";

const CsrPageComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView();

  const fetchPosts = async () => {
    try {
      const apiUrl = `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPosts = await response.json();
      setData((prevPosts) => [...prevPosts, ...newPosts]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, inView]);

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
