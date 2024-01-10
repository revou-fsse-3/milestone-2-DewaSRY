import { FC, ImgHTMLAttributes } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
interface indexProps extends ImgHTMLAttributes<HTMLImageElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <img
      {...resProps}
      src={pokemon?.sprites?.other?.dream_world.front_default}
      alt={`Pokemon ${pokemon?.name}`}
      className={`${resProps.className ? resProps.className : ""}`}
    />
  );
};

export default index;
