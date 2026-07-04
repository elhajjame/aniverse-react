import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import Home from "../pages/Home";
import AnimeList from "../pages/anime/AnimeList";
import AnimeDetailPage from "../pages/anime/AnimeDetailPage";
import FavoritePage from "../pages/FavoritePage";
import LibraryPage from "../pages/LibraryPage";

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
  {
    path: "/favorites",
    element: (
      <AppLayout>
        <FavoritePage />
      </AppLayout>
    ),
  },
  {
    path: "/my-library",
    element: (
      <AppLayout>
        <LibraryPage />
      </AppLayout>
    ),
  },
]);
export default router;
