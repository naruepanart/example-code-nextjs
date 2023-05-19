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

export const revalidate = 60;

const fetchPostData = async (postId) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch post ${postId}: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching post data:", error);
    return null;
  }
};
export async function generateStaticParams() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts for static params: ${response.status}`);
    }

    const data = await response.json();
    const posts = data.slice(0, 5).map((post) => ({ id: post?.id?.toString() ?? "" }));
    return posts;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

const page = async ({ params }) => {
  const { id } = params;
  const data = await fetchPostData(id);

  if (!data) {
    return (
      <>
        <h1>ISG - {id}</h1>
        <div>Post not found or failed to load</div>
      </>
    );
  }

  return (
    <>
      <h1>ISG - {id}</h1>
      <PageIDComponent key={data.id} posts={data} link={`/dynamics/isg`} />
    </>
  );
};

export default page;
