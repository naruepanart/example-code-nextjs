import PageIDComponent from "@/components/PageIDComponent";
import React from "react";
import { fetchPost } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.id);
  return {
    title: `${post.id} - ${post.title}`,
    description: post.body,
  };
}

const page = async ({ params }) => {
  const { id } = params;
  const data = await fetchPost(id, { cache: "force-cache" });

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
