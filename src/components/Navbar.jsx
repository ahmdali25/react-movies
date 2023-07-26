import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue px-20 py-4 text-neutral">
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <h1 className="text-lg font-bold">
            <Link to="/">MovieDB</Link>
          </h1>
          <ul className="flex items-center gap-5 text-sm">
            <li className="font-medium">
              <Link to="/">Movies</Link>
            </li>
            <li className="font-medium">
              <Link to="/movies">TV Shows</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center rounded-3xl bg-darkBlue p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search.."
            className="border-none bg-darkBlue px-2 text-sm outline-none"
          />
        </div>
      </div>
    </nav>
  );
}
