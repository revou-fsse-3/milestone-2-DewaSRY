import { FC, HTMLAttributes, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import usePokemon from "@store/StatePokemon";
import Home from "@pages/Home";
import Pokemon from "@pages/pokemon";
import Navigation from "@pages/navigation";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="/:pokemon" element={<Pokemon />} />
    </Route>
  )
);
interface AppProps extends HTMLAttributes<HTMLDivElement> {}
type AppComponents = FC<AppProps>;
const App: AppComponents = () => {
  const { getMorePokemon, allPokemon } = usePokemon();
  useEffect(() => {
    if (allPokemon.length) return;
    getMorePokemon();
  }, []);
  return <RouterProvider router={router} />;
};

export default App;
