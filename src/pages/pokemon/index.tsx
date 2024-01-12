import Shimmer from "@/common/Shimmer";
import ErrorBanner from "./components/ErrorBanner";

import PokemonCards from "@pages/pokemon/container/PokemonCard";
import { useParams } from "react-router-dom";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import useQueryPokemon from "@features/Query/QueryPokemon";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { pokemon: pokemonName } = useParams();
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQueryPokemon(pokemonName || "");

  return (
    <div
      {...resProps}
      className={
        "my-10  max-w-[100rem] mx-auto" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {isLoading && <Shimmer times={3} className="mb-2 py-[150px]" />}
      {pokemon && <PokemonCards pokemon={pokemon} />}
      {error && <ErrorBanner error={error} />}
    </div>
  );
};

export default index;
