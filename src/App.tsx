import { FC, HTMLAttributes } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "@pages/Home";
import Pokemon from "@pages/pokemon";
import Navigation from "@pages/navigation";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/:id" element={<Pokemon />} />
    </Route>
  )
);
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps>;
const App: AppComponents = () => {
  return <RouterProvider router={router} />;
};

export default App;
