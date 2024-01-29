import Link from "next/link";

export const metadata = {
  title: "About",
  description: "This is about page",
};

export default function AboutLayout({ children }) {
  const routes = [
    { name: "Mission", path: "/about/mission" },
    { name: "Vision", path: "/about/vision" },
  ];

  return (
    <div>
      <hr className="mt-1" />
      <nav className="mt-5">
        <ul className="flex divide-x gap-1">
          {routes.map((route, index) => (
            <li className={index !== 0 ? "pl-1" : ""} key={index}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}
