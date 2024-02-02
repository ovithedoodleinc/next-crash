import Comments from "@/components/comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Post({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const postCommentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([
  //   postPromise,
  //   postCommentsPromise,
  // ]);

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h1 className="text-blue-400">{post.title}</h1>
      <p className="mt-3">{post.body}</p>
      <Suspense fallback="Loading...">
        <Comments postCommentsPromise={postCommentsPromise} />
      </Suspense>
    </div>
  );
}
