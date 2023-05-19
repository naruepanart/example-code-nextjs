// src/app/dynamics/isr/page.js
import PageComponent from "@/components/PageComponent";
import React from "react";

export const metadata = {
  title: "ISR",
};

// Add revalidate at component level
export const revalidate = 60;

const fetchPostData = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);

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
      <h1>ISR</h1>
      {data.map((data) => (
        <PageComponent key={data.id} posts={data} link={`/dynamics/isr`} />
      ))}
    </>
  );
};

export default page;
