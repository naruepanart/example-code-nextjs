export async function fetchPost(id, options = {}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options);
  if (!res.ok) throw new Error("Fetch post failed");
  return res.json();
}

export async function fetchPosts(options = {}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  if (!res.ok) throw new Error("Fetch posts failed");
  return res.json();
}
