import { FC, HTMLAttributes } from "react";
import { useSearchParams } from "react-router-dom";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import Link from "@common/Link";
import PokemonFavorite from "@components/PokemonFavorite";
import PokemonType from "@components/pokemonType";
interface CardDisplayProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type CardDisplayComponents = FC<CardDisplayProps>;
const CardDisplay: CardDisplayComponents = ({ pokemon, ...resProps }) => {
  const [searchType] = useSearchParams();
  const type = searchType.get("type");
  if (type) {
    let currentType = pokemon.types.find((t) => t.type.name === type);
    if (!currentType) return null;
  }
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
        <img
          src={pokemon?.sprites?.other?.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
          className="w-full "
        />
      </div>
      <div
        className={"relative " + " h-[80px] flex flex-col justify-between  "}
      >
        <span className="text-[2rem] text-white underline font-bold mr-4 absolute right-0">
          # {pokemon.id}
        </span>

        <span
          className={
            "bg-title w-6/12  rounded-xl  " +
            "px-4 py-2 inline-block font-bold text-xl  "
          }
        >
          <Link to={"/" + pokemon.name}>{pokemon.name}</Link>
        </span>
        <PokemonType pokemon={pokemon} className="text-lg" />
      </div>
    </div>
  );
};

export default CardDisplay;
