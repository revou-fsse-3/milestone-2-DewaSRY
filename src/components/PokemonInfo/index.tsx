import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import H2 from "@common/H2";
import InfoDisplay from "./InfoDisplay";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        " text-white" + `${resProps.className ? resProps.className : ""}`
      }
    >
      <H2 className="bg-title  px-4 py-2 rounded-lg ">
        {pokemon.name}
        <span>#{pokemon.id}</span>
      </H2>
      <div>
        <H2>BMI</H2>
        <InfoDisplay title="Hight">
          {Number(pokemon.height / 10).toFixed(2)} M
        </InfoDisplay>
        <InfoDisplay title="Weight">{pokemon.weight} KG</InfoDisplay>
      </div>
    </div>
  );
};

export default index;
