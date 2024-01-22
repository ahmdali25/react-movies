import Tv from "../components/Tv";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getTvShows } from "../services/getTVShows";
import { formatHeaderName } from "../utils/headerNameUtils";

export async function tvShowLoader({ params }) {
  const { id } = params;
  const data = await getTvShows(id);
  return data;
}

export default function Movies() {
  const data = useLoaderData();
  const location = useLocation();
  const headerName = formatHeaderName(location.pathname);

  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">
          {location.pathname == "/tv/airing_today"
            ? "TV Shows " + headerName
            : headerName + " TV Shows"}
        </h1>
      </div>

      <Tv data={data} />
    </section>
  );
}
