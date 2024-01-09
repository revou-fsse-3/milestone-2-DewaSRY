import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import H2 from "@common/H2";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div>
      <H2 className="text-white">Element</H2>
      <div>
        {pokemon.types.map((type) => {
          return (
            <span
              {...resProps}
              key={type.type.name}
              className={
                `${resProps.className ? resProps.className : ""} ` +
                ` ${type.type.name} inline-block text-white  px-4 py-1 rounded-xl mr-4`
              }
            >
              {type.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default index;
