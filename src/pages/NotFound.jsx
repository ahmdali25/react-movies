import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-primary">Oops! Page not found</h2>
      <p className="my-5 text-lg">
        You tried to request a page that doesn't exist. Back to&nbsp;
        <Link to="/" className="font-semibold">
          Homepage.
        </Link>
      </p>
    </section>
  );
}
