import PageComponent from "@/components/PageComponent";
import { fetchPosts } from "@/lib/posts";

export const metadata = { title: "ISR" };

export default async function Page() {
  const data = await fetchPosts({ next: { revalidate: 60 } });

  return (
    <>
      <h1>ISR</h1>
      {data.map((post) => (
        <PageComponent key={post.id} posts={post} link="/dynamics/isr" />
      ))}
    </>
  );
}
