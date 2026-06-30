import { RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import router from "./router/router";


function App() {
  return (
<>
<RouterProvider router={router}>
  <AppLayout/>
</RouterProvider>
</>
  );
}

export default App;
