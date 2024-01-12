import { FC, HTMLAttributes, PropsWithChildren } from "react";

import PokemonFilter from "@pages/Home/container/PokemonFilter";
import PokemonCards from "@pages/Home/container/PokemonCards";
import FilterProvider from "./context/FilterProvider";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({}) => {
  return (
    <FilterProvider>
      <PokemonFilter />
      <PokemonCards />
    </FilterProvider>
  );
};

export default index;
