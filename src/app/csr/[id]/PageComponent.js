"use client";
import PageIDComponent from "@/components/PageIDComponent";
import React, { useEffect, useState } from "react";

const CsrIdPageComponent = (props) => {
  const { id } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const postUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const response = await fetch(postUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
      }
      const post = await response.json();
      setData(post);
    } catch (err) {
      console.error("Error fetching post:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]); // Add id to dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <PageIDComponent key={data.id} posts={data} />
    </>
  );
};

export default CsrIdPageComponent;
