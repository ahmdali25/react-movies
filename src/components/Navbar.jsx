import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getSearchMovie } from "../services/getSearchMovie";
import { MovieSearch } from "../context/MovieSearch";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { query, setQuery, setMovie } = useContext(MovieSearch);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      getSearchMovie(query).then((data) => {
        setMovie(data);
        navigate(`/search/${query}`);
      });
    }
  }, [query, setMovie, navigate]);

  function handleSearch(query) {
    setQuery(query);
    if (query === "") {
      navigate("/");
    }
  }

  return (
    <nav className="bg-blue px-20 py-4 text-neutral">
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <h1 className="text-lg font-bold">
            <Link to="/">MovieDB</Link>
          </h1>
          <ul className="flex items-center gap-6 text-sm">
            <li className="group relative inline-block font-medium">
              <span className="cursor-pointer">Movies</span>
              <ul className="absolute z-10 hidden w-36 rounded bg-white py-2 shadow-lg group-hover:block">
                <li>
                  <Link
                    to="/movie"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movie"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Now Playing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movie"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Upcoming
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movie"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative inline-block font-medium">
              <span className="cursor-pointer">TV Show</span>
              <ul className="absolute z-10 hidden w-36 rounded bg-white py-2 shadow-lg group-hover:block">
                <li>
                  <Link
                    to="/tv"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tv"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Airing Today
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tv"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    On The Air
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tv"
                    className="block px-5 py-1.5 text-black hover:bg-gray-100"
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
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
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
}
