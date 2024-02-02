export default async function Comments({ postCommentsPromise }) {
  const comments = await postCommentsPromise;

  return (
    <ul className="mt-6">
      {comments.map((comment) => (
        <li key={comment.id} className="mt-3">
          {comment.body}
        </li>
      ))}
    </ul>
  );
}
