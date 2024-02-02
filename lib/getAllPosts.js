export default async function getAllPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("error while fetch posts!");
  }

  return res.json();
}
