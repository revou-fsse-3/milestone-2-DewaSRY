import { FC, HTMLAttributes, PropsWithChildren } from "react";
import usePokemon from "@context/PokemonList/usePokemon";
import usePokemonSearch from "@/context/PokemonSearch/usePokemonSearch";
import Button, { ButtonTypes } from "@/common/Button";
interface PokemonGetMoreProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonGetMoreComponents = FC<PokemonGetMoreProps> & PropsWithChildren;
const PokemonGetMore: PokemonGetMoreComponents = ({
  children,
  ...resProps
}) => {
  const { getMorePokemon, allPokemon, isLoading } = usePokemon();
  const { data, searchText } = usePokemonSearch();
  console.log(searchText);
  return (
    <div
      {...resProps}
      className={
        "flex justify-end" + `${resProps.className ? resProps.className : ""}`
      }
    >
      {data.length === 0 && searchText.length > 0 ? (
        <Button
          isLoading={isLoading}
          ButtonType={ButtonTypes.TernaryButton}
          onClick={getMorePokemon}
        >
          ({allPokemon.length}) pokemon get More
        </Button>
      ) : null}
    </div>
  );
};

export default PokemonGetMore;
