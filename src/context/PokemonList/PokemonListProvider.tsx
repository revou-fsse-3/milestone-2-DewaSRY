import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { pokemon as PokemonContext } from "./usePokemon";
import useStatePokemon from "@store/StatePokemon";
import { GetAllPokemon, FetchPokemonByName } from "@libs/pokemon";
import ErrorFetching from "@/libs/Error";
interface PokemonListProviderProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonListProviderComponents = FC<PokemonListProviderProps> &
  PropsWithChildren;
const PokemonListProvider: PokemonListProviderComponents = ({ children }) => {
  const {
    setAllPokemon,
    setAllPokemonNames,
    setIsLoading,
    setIsError,
    ...restProps
  } = useStatePokemon();
  const limitedPokemon = useRef(50);
  const [offset, setOffset] = useState(0);

  const _globalPokemon = async (o: number) => {
    setIsLoading(true);
    try {
      const allPokemonResult = await GetAllPokemon(limitedPokemon.current, o);
      const pokemonList = await FetchPokemonByName(allPokemonResult);
      setAllPokemonNames(allPokemonResult);
      setAllPokemon(pokemonList);
      return;
    } catch (error) {
      if (error instanceof ErrorFetching) {
        throw Error("failed to fetch multiple pokemon");
      } else return [];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    _globalPokemon(offset);
  }, []);

  const getMorePokemon = () => {
    setOffset((prev) => prev + limitedPokemon.current);
    _globalPokemon(
      Math.max(offset + limitedPokemon.current, limitedPokemon.current)
    );
  };
  return (
    <PokemonContext.Provider value={{ getMorePokemon, ...restProps }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonListProvider;
