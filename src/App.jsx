import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home, { homeLoader } from "./pages/Home";
import Result from "./pages/Result";
import Detail, { movieDetailLoader } from "./pages/Detail";
import NotFound from "./pages/NotFound";
import MovieSearchContextProvider from "./context/MovieSearch";
import Movies, { movieLoader } from "./pages/Movies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="movie/:id" element={<Movies />} loader={movieLoader} />
      <Route path="movie-detail/:id" element={<Detail />} loader={movieDetailLoader} />
      <Route path="search/:query" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <>
      <MovieSearchContextProvider>
        <RouterProvider router={router} />
      </MovieSearchContextProvider>
    </>
  );
}
