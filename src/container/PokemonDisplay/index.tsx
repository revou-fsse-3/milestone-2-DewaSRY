import { useParams } from "react-router-dom";
import Loader from "@components/Loader";
import usePokemon from "@/context/PokemonList/usePokemon";
import PokemonGallery from "@/components/PokemonGallery";
import PokemonInfoDisplay from "@components/PokemonIfoDisplay";
export default () => {
  const { allPokemon, isLoading } = usePokemon();
  const { id } = useParams();
  const pokemon = allPokemon.find((p) => p.name === id);
  if (!pokemon) return <>no pokemont</>;
  if (pokemon)
    return (
      <main className="">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="my-10  max-w-[100rem] mx-auto">
            <PokemonInfoDisplay pokemon={pokemon} />
            <PokemonGallery className=" " pokemon={pokemon} />
          </div>
        )}
      </main>
    );
};
