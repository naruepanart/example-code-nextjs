import PageComponent from "@/components/PageComponent";
import { fetchPosts } from "@/lib/posts";
import React from "react";

export const metadata = {
  title: "Static",
};

export const dynamic = "force-static";

const page = async () => {
  const data = await fetchPosts({ cache: "force-cache" });

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
