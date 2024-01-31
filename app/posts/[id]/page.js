import getPost from "@/lib/getPost";

export default async function Post({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="mt-6">
      <h1 className="text-blue-400">{post.title}</h1>
      <p className="mt-3">{post.body}</p>
    </div>
  );
}
