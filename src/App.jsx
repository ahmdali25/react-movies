import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home";

export default function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

