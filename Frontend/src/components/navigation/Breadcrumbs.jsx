import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

          const isLast = index === pathnames.length - 1;

          return (
            <li
              key={routeTo}
              className="flex items-center gap-1">
              <span>/</span>
              {isLast ? (
                <span className="capitalize text-gray-700">
                  {name.replace("-", " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="capitalize hover:text-blue-600 transition">
                  {name.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
