import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import AnimeList from "../pages/anime/AnimeList";
import AnimeDetailPage from "../pages/anime/AnimeDetailPage";

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
  {
    path: "/anime/:id",
    element: (
      <AppLayout>
        <AnimeDetailPage />
      </AppLayout>
    ),
  },
]);
export default router;
