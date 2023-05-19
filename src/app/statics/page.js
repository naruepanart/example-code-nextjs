import PageComponent from "@/components/PageComponent";
import React from "react";

export const metadata = {
  title: "Static",
};

const fetchPostData = async () => {
  try {
    const postUrl = `https://jsonplaceholder.typicode.com/posts`;
    const postResponse = await fetch(postUrl);

    if (!postResponse.ok) {
      throw new Error(`HTTP error! status: ${postResponse.status}`);
    }

    return await postResponse.json();
  } catch (error) {
    console.error("Failed to fetch static posts:", error);
    return [];
  }
};

const page = async () => {
  const data = await fetchPostData();
  return (
    <>
      <h1>Static</h1>
      {data.map((data) => (
        <PageComponent key={data.id} posts={data} link={`/statics`} />
      ))}
    </>
  );
};

export default page;
