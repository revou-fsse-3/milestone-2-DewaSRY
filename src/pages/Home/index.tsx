import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";

import PokemonCards from "@container/PokemonCards";
import PokemonFilter from "@container/PokemonFilter";
// import Shimmer from "@/common/Shimmer";
// import usePokemon from "@/context/PokemonList/usePokemon";
// import Button from "@/common/Button";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({}) => {
  return (
    <Fragment>
      <PokemonFilter />
      <PokemonCards />
    </Fragment>
  );
};

export default index;
