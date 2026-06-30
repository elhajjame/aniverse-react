import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import AnimeList from "../pages/anime/AnimeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/anime",
    element: (
      <AppLayout>
        <AnimeList />
      </AppLayout>
    ),
  },
]);
export default router;