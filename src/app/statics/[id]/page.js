import PageIDComponent from "@/components/PageIDComponent";
import React from "react";

export async function generateMetadata({ params }) {
  const postData = await fetchPostData(params.id);
  if (!postData) {
    return {
      title: "Post not found",
      description: "The requested post could not be found",
    };
  }
  return {
    title: `${postData.id} - ${postData.title}`,
    description: postData.body,
  };
}

const fetchPostData = async (postId) => {
  try {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(postUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch post ${postId}: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching static post:", error);
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = params;
  const data = await fetchPostData(id);

  if (!data) {
    return (
      <>
        <h1>Static - {id}</h1>
        <div>Post not found or failed to load</div>
      </>
    );
  }

  return (
    <>
      <h1>Static - {id}</h1>
      <PageIDComponent key={data.id} posts={data} />
    </>
  );
};

export default page;
