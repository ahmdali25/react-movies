import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Detail, { movieDetailLoader } from "./pages/Detail";
import NotFound from "./pages/NotFound";
import MovieSearchContextProvider from "./context/MovieSearch";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="search/:query" element={<Result />} />
      <Route path="movie/:id" element={<Detail />} loader={movieDetailLoader} />
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
