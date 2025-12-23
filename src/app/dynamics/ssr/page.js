import PageComponent from "@/components/PageComponent";
import { fetchPosts } from "@/lib/posts";

export const metadata = { title: "SSR" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await fetchPosts({ cache: "no-store" });

  return (
    <>
      <h1>SSR</h1>
      {data.map((post) => (
        <PageComponent
          key={post.id}
          posts={post}
          link="/dynamics/ssr"
        />
      ))}
    </>
  );
}
