import { FC, HTMLAttributes } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import Link from "@common/Link";
import PokemonFavorite from "@components/PokemonFavorite";
import PokemonType from "@components/pokemonType";
import PokemonImg from "@components/PokemonImg";
import PokemonTitle from "@components/PokemonTitle";
interface CardDisplayProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type CardDisplayComponents = FC<CardDisplayProps>;
const CardDisplay: CardDisplayComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "h-[400px] " +
        `${resProps.className ? resProps.className : "object-cover"}`
      }
    >
      <div className=" relative w-[300px] h-[300px] bg-card transition-colors hover:brightness-105  ">
        <PokemonFavorite className="absolute top-0 right-0" pokemon={pokemon} />
        <PokemonImg pokemon={pokemon} className="w-full " />
      </div>
      <Link to={"/" + pokemon.name} title={pokemon.name}>
        <PokemonTitle pokemon={pokemon} />
      </Link>
      <PokemonType pokemon={pokemon} className="text-lg" />
    </div>
  );
};

export default CardDisplay;
