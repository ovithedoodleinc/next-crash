export default function Blogs({ params }) {
  const { id } = params;

  return (
    <div className="mt-10">
      <h1>This is blog {id}</h1>
    </div>
  );
}
