import { FC, HTMLAttributes } from "react";
import PokemonStatus from "@/components/PokemonStatus";
import PokemonInfo from "@components/PokemonInfo";
import PokemonType from "@components/pokemonType";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import PokemonFavorite from "../PokemonFavorite";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        " max-w-[70rem]   lg:grid  lg:grid-cols-pokemon-display " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      <div className="w-[20rem] relative px-6 py-4 lg:col-start-1 lg:col-end-2 ">
        <PokemonFavorite className="absolute top-0 right-0" pokemon={pokemon} />
        <img
          src={pokemon?.sprites?.other?.dream_world.front_default}
          alt={`Pokemon ${pokemon?.name}`}
          height={500}
          width={400}
          className="bg-card rounded-xl "
        />
        <PokemonInfo pokemon={pokemon} />
        <PokemonType pokemon={pokemon} className="text2xl px-6 py-2" />
      </div>
      <PokemonStatus
        pokemon={pokemon}
        className="lg:col-start-2 lg:col-end-3 "
      />
    </div>
  );
};

export default index;
