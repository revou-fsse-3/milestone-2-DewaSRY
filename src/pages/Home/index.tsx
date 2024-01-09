import { FC, HTMLAttributes, PropsWithChildren, Fragment } from "react";

import PokemonCards from "@container/PokemonCards";
import PokemonFilter from "@container/PokemonFilter";
// import Button from "@/common/Button";
// import usePokemon from "@/context/PokemonList/usePokemon";
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
