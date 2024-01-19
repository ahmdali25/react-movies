import Movie from "../components/Movie";
import { useLoaderData } from "react-router-dom";
import { getTrendingMovies } from "../services/getTrendingMovies";

export async function homeLoader() {
  const data = await getTrendingMovies();
  return data;
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
