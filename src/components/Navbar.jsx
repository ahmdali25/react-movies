import { useEffect, useContext } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import fetchData from "../api/api";
import { MovieSearch } from "../context/MovieSearch";
import NavItem from "./NavItem";
import { SearchIcon } from "./Icons";

export default function Navbar() {
  const { query, setQuery, setMovie } = useContext(MovieSearch);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const isMovie =
    location.pathname === "/" || location.pathname.startsWith("/movie");

  useEffect(() => {
    const searchType = isMovie ? "movie" : "tv";
    const queryParam = params.query || query;

    if (queryParam) {
      fetchData(`/search/${searchType}`, { query: queryParam }).then((data) => {
        setMovie(data.results);
        navigate(`/search/${queryParam}`);
      });
    }
  }, [query, params.query, setMovie, navigate, isMovie]);

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
                <NavItem to="/movie" id="popular">
                  Popular
                </NavItem>
                <NavItem to="/movie" id="now_playing">
                  Now Playing
                </NavItem>
                <NavItem to="/movie" id="upcoming">
                  Upcoming
                </NavItem>
                <NavItem to="/movie" id="top_rated">
                  Top Rated
                </NavItem>
              </ul>
            </li>
            <li className="group relative inline-block font-medium">
              <span className="cursor-pointer">TV Show</span>
              <ul className="absolute z-10 hidden w-36 rounded bg-white py-2 shadow-lg group-hover:block">
                <NavItem to="/tv" id="popular">
                  Popular
                </NavItem>
                <NavItem to="/tv" id="airing_today">
                  Airing Today
                </NavItem>
                <NavItem to="/tv" id="on_the_air">
                  On TV
                </NavItem>
                <NavItem to="/tv" id="top_rated">
                  Top Rated
                </NavItem>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center rounded-3xl bg-darkBlue p-3">
          <SearchIcon />
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
