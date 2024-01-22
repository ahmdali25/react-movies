import Movie from "../components/Movie";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getMovies } from "../services/getMovies";
import { formatHeaderName } from "../utils/headerNameUtils";

export async function movieLoader({ params }) {
  const { id } = params;
  const data = await getMovies(id);
  return data;
}

export default function Movies() {
  const data = useLoaderData();
  const location = useLocation();
  const headerName = formatHeaderName(location.pathname);

  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">{headerName} Movies</h1>
      </div>

      <Movie data={data} />
    </section>
  );
}
