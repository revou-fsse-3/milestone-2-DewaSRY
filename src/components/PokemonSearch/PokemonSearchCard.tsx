import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import PokemonImg from "@components/PokemonImg";
import Link from "@common/Link";
interface PokemonSearchCardProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type PokemonSearchCardComponents = FC<PokemonSearchCardProps> &
  PropsWithChildren;
const PokemonSearchCard: PokemonSearchCardComponents = ({
  children,
  pokemon,
  ...resProps
}) => {
  return (
    <div
      {...resProps}
      className={
        "flex justify-between h-[50px]" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      <PokemonImg pokemon={pokemon} src="" alt="" />
      <Link to={pokemon.name}>{pokemon.name}</Link>
    </div>
  );
};

export default PokemonSearchCard;
