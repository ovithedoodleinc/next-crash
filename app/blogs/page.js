import Link from "next/link";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", desc: "Desc 1" },
    { id: 2, title: "Blog 2", desc: "Desc 2" },
  ];

  return (
    <div className="mt-10">
      <h1>List of Blogs</h1>
      <div className="mt-5">
        <ul className="flex flex-col gap-4">
          {blogs.map((blog, index) => (
            <li key={index}>
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
