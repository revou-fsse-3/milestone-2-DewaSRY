import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import useFilterPokemon from "../../context/PokemonFilter/useFilterPokemon";
import PokemonCard from "@/components/PokemonCard";
interface PokemonCardsProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonCardsComponents = FC<PokemonCardsProps> & PropsWithChildren;
const PokemonCards: PokemonCardsComponents = ({ children, ...resProps }) => {
  const { data, isLoading } = useFilterPokemon();
  if (isLoading) return <div>loading...</div>;
  return (
    <div
      {...resProps}
      className={
        " grid grid-cols-pokemon-table max-w-[1800px] gap-x-4 gap-y-6  px-6 py-10 lg:mx-auto" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {data.map((p, id) => (
        <Fragment key={p.name + id + p.id}>
          <PokemonCard pokemon={p} />
        </Fragment>
      ))}
    </div>
  );
};

export default PokemonCards;
