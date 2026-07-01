import { RouterProvider } from "react-router-dom";
// import AppLayout from "./components/layout/AppLayout";
import router from "./router/router";
import AnimeProvider from "./context/animeContext";

function App() {
  return (
    <>
      <AnimeProvider>
        <RouterProvider router={router} />
      </AnimeProvider>
    </>
  );
}

export default App;
