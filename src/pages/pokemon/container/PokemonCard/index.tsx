import { FC, Fragment, HTMLAttributes } from "react";
import PokemonGallery from "@pages/pokemon/components/PokemonGallery";
import PokemonStatus from "@/pages/pokemon/components/PokemonStatus";
import PokemonImg from "@/components/PokemonImg";
import PokemonTitle from "@pages/pokemon/components/PokemonTitle";
import PokemonBMI from "@pages/pokemon/components/PokemonBMI";
import PokemonType from "@/components/pokemonType";
import type { GetPokemonProps } from "@libs/pokemon/GetPokemon";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemon }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default index;
