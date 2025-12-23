"use client";
import PageIDComponent from "@/components/PageIDComponent";
import { useEffect, useState } from "react";

const CsrIdPageComponent = ({ id }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error(res.statusText);
        setData(await res.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    return () => controller.abort();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <PageIDComponent posts={data} />;
};

export default CsrIdPageComponent;
