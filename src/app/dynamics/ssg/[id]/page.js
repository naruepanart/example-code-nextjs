import PageIDComponent from "@/components/PageIDComponent";
import { fetchPost, fetchPosts } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.id);
  return {
    title: `${post.id} - ${post.title}`,
    description: post.body,
  };
}

export async function generateStaticParams() {
  const posts = await fetchPosts({ cache: "force-cache" });
  return posts.slice(0, 10).map((p) => ({
    id: p.id.toString(),
  }));
}

export default async function Page({ params }) {
  const data = await fetchPost(params.id, { cache: "force-cache" });

  return (
    <>
      <h1>SSG - {params.id}</h1>
      <PageIDComponent posts={data} />
    </>
  );
}
