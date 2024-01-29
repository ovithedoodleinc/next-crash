import { notFound } from "next/navigation";

export default function Blogs({ params }) {
  const { id } = params;

  if (id === "3") {
    notFound();
  }

  return (
    <div className="mt-10">
      <h1>This is blog {id}</h1>
    </div>
  );
}
