import { FC, HTMLAttributes, PropsWithChildren, useRef } from "react";
import usePokemonSearch from "@pages/navigation/context/useSearch";
import PokemonCards from "./PokemonCards";
import Panel from "@/common/Panel";
import { PokemonFormProps } from "@pages/navigation/container/SearchPokemon";

interface PokemonDropDownProps extends HTMLAttributes<HTMLDivElement> {
  props: PokemonFormProps;
}
type PokemonDropDownComponents = FC<PokemonDropDownProps> & PropsWithChildren;
const PokemonDropDown: PokemonDropDownComponents = ({ props, ...resProps }) => {
  const { data, getReset } = usePokemonSearch();
  const pokemonSearch = useRef<HTMLDivElement | null>(null);
  const handleCloseDopeDown = () => {
    getReset();
    props.resetForm();
  };

  return (
    <div
      {...resProps}
      ref={pokemonSearch}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      {data.length > 0 ? (
        <Panel
          handleClose={handleCloseDopeDown}
          parent={pokemonSearch.current!}
        >
          {data.map((p, id) => (
            <PokemonCards key={p.name + id} pokemon={p} />
          ))}
        </Panel>
      ) : null}
    </div>
  );
};

export default PokemonDropDown;
