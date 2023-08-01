import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Detail, { movieDetailLoader } from "./pages/Detail";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<Detail />} loader={movieDetailLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
