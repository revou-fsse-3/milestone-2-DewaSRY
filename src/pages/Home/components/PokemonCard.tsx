import { FC, HTMLAttributes } from "react";
import { GetPokemonProps } from "@libs/pokemon/GetPokemon";
import Link from "@common/Link";
// import PokemonFavorite from "@components/PokemonFavorite";
import PokemonType from "@components/pokemonType";
import PokemonImg from "@components/PokemonImg";
import PokemonTitle from "@/pages/pokemon/components/PokemonTitle";
interface CardDisplayProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type CardDisplayComponents = FC<CardDisplayProps>;
const CardDisplay: CardDisplayComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : " "}`}
    >
      <PokemonImg
        className="w-[300px] h-[300px]  bg-card   "
        pokemon={pokemon}
      />
      <Link to={"/" + pokemon.name} title={pokemon.name}>
        <PokemonTitle pokemon={pokemon} />
      </Link>
      <PokemonType pokemon={pokemon} className="text-lg" />
    </div>
  );
};

export default CardDisplay;
