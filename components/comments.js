export default async function Comments({ postCommentsPromise }) {
  const comments = await postCommentsPromise;

  return (
    <div className="mt-3">
      <h1>Comments</h1>
      <ul className="mt-6">
        {comments.map((comment) => (
          <li key={comment.id} className="mt-3">
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
