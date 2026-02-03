import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
        <span className="font-semibold">404</span>
        <span className="text-gray-400">|</span>
        <span>Page not found</span>
      </div>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        We can’t find that page
      </h1>

      <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
        The URL{" "}
        <span className="font-mono text-gray-900">{location.pathname}</span>{" "}
        doesn’t match any page in this app.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Go to Home
        </Link>
        <Link
          to="/login"
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        >
          Go to Login
        </Link>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        If you expected something here, double-check the link.
      </p>
    </section>
  );
};

export default NotFound;
