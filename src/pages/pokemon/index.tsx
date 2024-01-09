import { FC, HTMLAttributes, PropsWithChildren } from "react";
import PokemonDisplay from "@/container/PokemonDisplay";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <PokemonDisplay />
    </div>
  );
};

export default index;
