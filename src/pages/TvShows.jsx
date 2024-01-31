import Tv from "../components/Tv";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import fetchData from "../api/api";
import { formatHeaderName } from "../utils/headerNameUtils";
import useDynamicTitle from "../utils/dynamicTitleUtils";

export async function tvShowLoader({ params }) {
  const { id } = params;
  const data = await fetchData(`/tv/${id}`);
  return data.results;
}

export default function TvShows() {
  const data = useLoaderData();
  const location = useLocation();
  const headerName = formatHeaderName(location.pathname);
  const headerTitle =
    location.pathname == "/tv/airing_today"
      ? "TV Shows " + headerName
      : headerName + " TV Shows";

  useDynamicTitle(`${headerTitle} - MovieDB`);

  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">{headerTitle}</h1>
      </div>

      <Tv data={data} />
    </section>
  );
}
