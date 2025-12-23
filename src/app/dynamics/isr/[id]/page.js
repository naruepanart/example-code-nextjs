import PageIDComponent from "@/components/PageIDComponent";
import { fetchPost } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = await fetchPost(params.id);
  return {
    title: `${post.id} - ${post.title}`,
    description: post.body,
  };
}

export default async function Page({ params }) {
  const data = await fetchPost(params.id, { next: { revalidate: 60 } });

  return (
    <>
      <h1>ISR - {params.id}</h1>
      <PageIDComponent posts={data} />
    </>
  );
}
