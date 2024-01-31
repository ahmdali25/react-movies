import Movie from "../components/Movie";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import fetchData from "../api/api";
import { formatHeaderName } from "../utils/headerNameUtils";
import useDynamicTitle from "../utils/dynamicTitleUtils";

export async function movieLoader({ params }) {
  const { id } = params;
  const data = await fetchData(`/movie/${id}`);
  return data.results;
}

export default function Movies() {
  const data = useLoaderData();
  const location = useLocation();
  const headerName = formatHeaderName(location.pathname);

  useDynamicTitle(`${headerName} Movies - MovieDB`);

  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">{headerName} Movies</h1>
      </div>

      <Movie data={data} />
    </section>
  );
}
