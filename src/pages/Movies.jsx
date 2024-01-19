import Movie from "../components/Movie";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getMovies } from "../services/getMovies";

export async function movieLoader({params}) {
    const { id } = params;
    const data = await getMovies(id);
    return data;
}

const headerName = (path) => {
  let headName = path.split('/').slice(-1)[0]

  return transformPath(headName)
}

const transformPath = (path) => {
  let headName = path.replace(/_/g, ' ').toLowerCase().split(' ')
  console.log(headName)

  for (var i = 0; i < headName.length; i++) {
    headName[i] = headName[i].charAt(0).toUpperCase() + headName[i].slice(1)
  }

  return headName.join(' ')
}

export default function Movies() {
  const data = useLoaderData();
  const location = useLocation();

  return (
    <section>
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-primary">{ headerName(location.pathname) } Movies</h1>
      </div>
      <Movie data={data} />
    </section>
  );
}