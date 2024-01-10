import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={
        "relative w-full" + `${resProps.className ? resProps.className : ""}`
      }
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
        {pokemon.name}
      </span>
    </div>
  );
};

export default index;
