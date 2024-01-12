import { Fragment } from "react";
import Shimmer from "@/common/Shimmer";
import PokemonGallery from "@pages/pokemon/components/PokemonGallery";
import PokemonStatus from "@/pages/pokemon/components/PokemonStatus";
import PokemonImg from "@/components/PokemonImg";
import PokemonTitle from "./components/PokemonTitle";
import PokemonType from "@/components/pokemonType";
import PokemonBMI from "./components/PokemonBMI";
import ErrorBanner from "./components/ErrorBanner";
import { useQuery } from "@tanstack/react-query";
import { GetPokemon } from "@/libs/pokemon";
import { useParams } from "react-router-dom";
import { GetPokemonProps } from "@/utils/pokemon/GetPokemonProps";
import ErrorFetching from "@/libs/Error";
import { FC, HTMLAttributes, PropsWithChildren } from "react";

interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const { pokemon: pokemonName } = useParams();
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery<GetPokemonProps, ErrorFetching>({
    queryKey: [`pokemon-${pokemonName}`],
    queryFn: ({ signal }) => GetPokemon(pokemonName, signal),
  });
  return (
    <div
      {...resProps}
      className={
        "my-10  max-w-[100rem] mx-auto" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {isLoading && (
        <Fragment>
          <Shimmer times={3} className="mb-2 py-[150px]" />
        </Fragment>
      )}
      {pokemon && (
        <>
          <PokemonImg
            pokemon={pokemon}
            height={500}
            width={400}
            className="bg-card rounded-xl "
          />
          <PokemonTitle pokemon={pokemon} />
          <PokemonBMI pokemon={pokemon} />
          <PokemonType pokemon={pokemon} className="text2xl px-6 py-2" />
          <PokemonStatus
            pokemon={pokemon}
            className="lg:col-start-2 lg:col-end-3 "
          />
          <PokemonGallery className=" " pokemon={pokemon} />
        </>
      )}
      {error && <ErrorBanner error={error} />}
    </div>
  );
};

export default index;
