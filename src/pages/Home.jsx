import Movie from "../components/Movie";
import { useLoaderData } from "react-router-dom";
import fetchData from "../api/api";

export async function homeLoader() {
  const data = await fetchData("/trending/movie/day");
  return data.results;
}

export default function Home() {
  const data = useLoaderData();
  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">Trending Movies</h1>
      </div>
      <Movie data={data} />
    </section>
  );
}
