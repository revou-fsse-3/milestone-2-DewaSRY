import { useParams } from "react-router-dom";
// import Loader from "@components/Loader";
import Shimmer from "@/common/Shimmer";
import usePokemon from "@/context/PokemonList/usePokemon";
import PokemonGallery from "@/components/PokemonGallery";
import PokemonInfoDisplay from "@components/PokemonIfoDisplay";
import { Fragment } from "react";
export default () => {
  const { allPokemon, isLoading } = usePokemon();
  const { id } = useParams();
  const pokemon = allPokemon.find((p) => p.name === id);

  return (
    <main className="">
      <div className="my-10  max-w-[100rem] mx-auto">
        {!pokemon || isLoading ? (
          <Fragment>
            <Shimmer times={3} className="mb-2 py-[150px]" />
          </Fragment>
        ) : (
          <>
            <PokemonInfoDisplay pokemon={pokemon} />
            <PokemonGallery className=" " pokemon={pokemon} />
          </>
        )}
      </div>
    </main>
  );
};
