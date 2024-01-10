import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import useFilterPokemon from "../../context/PokemonFilter/useFilterPokemon";
import PokemonCard from "@/components/PokemonCard";
import Loading from "./Loading";
import usePokemon from "@/context/PokemonList/usePokemon";
interface PokemonCardsProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonCardsComponents = FC<PokemonCardsProps> & PropsWithChildren;
const PokemonCards: PokemonCardsComponents = ({ children, ...resProps }) => {
  const { data } = useFilterPokemon();
  const { isLoading } = usePokemon();

  return (
    <div
      {...resProps}
      className={
        " grid grid-cols-pokemon-table max-w-[1800px] gap-x-4 gap-y-6  px-6 py-10 lg:mx-auto" +
        ` ${resProps.className ? resProps.className : ""}`
      }
    >
      {/* <Loading /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {data.map((p, id) => (
            <PokemonCard key={p.name + id + p.id} pokemon={p} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default PokemonCards;
