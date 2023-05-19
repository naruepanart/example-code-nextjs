import PageComponent from "@/components/PageComponent";
import React from "react";

export const metadata = {
  title: "SSR",
};

export const dynamic = "force-dynamic";

const fetchPostData = async () => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};
const page = async () => {
  const data = await fetchPostData();
  return (
    <>
      <h1>SSR</h1>
      {data.map((data) => (
        <PageComponent key={data.id} posts={data} link={`/dynamics/ssr`} />
      ))}
    </>
  );
};

export default page;
