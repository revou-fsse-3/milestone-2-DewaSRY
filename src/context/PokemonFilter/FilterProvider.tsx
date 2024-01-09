import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import usePokemon from "@/context/PokemonList/usePokemon";
import useFavoritePokemon from "@store/StateFavoritePokemon";
import { filterPokemon } from "./useFilterPokemon";
import { PokemonType, PokemonTypes } from "@utils/pokemon/PokemonType";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import FetchPokemonByName from "@libs/pokemon/FetchPokemonByName";
interface FilterProviderProps extends HTMLAttributes<HTMLDivElement> {}
type FilterProviderComponents = FC<FilterProviderProps> & PropsWithChildren;
const FilterProvider: FilterProviderComponents = ({ children }) => {
  const { favoritePokemonNames, addPokemonFavorite } = useFavoritePokemon();
  const { allPokemon, isLoading: loading } = usePokemon();
  const [data, setData] = useState(allPokemon);
  const [isLoading, setIsLoading] = useState(loading);
  const storeType = useRef<PokemonTypes | "" | "favorite">("");

  const _filterPokemon = (type: PokemonTypes) => {
    return allPokemon.filter((p) => p.types.find((t) => t.type.name === type));
  };

  const getFilterPokemon = async (type: PokemonType) => {
    setIsLoading(true);
    storeType.current = type;
    const newData = _filterPokemon(type);
    setData(newData);
    setIsLoading(false);
  };

  const getResetPokemon = () => {
    setIsLoading(true);
    setData(allPokemon);
    storeType.current = "";
    setIsLoading(false);
  };

  const getFavoritePokemon = async () => {
    if (favoritePokemonNames.length === 0) {
      setData([]);
      return;
    }
    try {
      const favoritePokemon = await FetchPokemonByName(favoritePokemonNames);
      setData(favoritePokemon);
    } catch (error) {
      console.error(error);
      setData([]);
    } finally {
      storeType.current = "favorite";
    }
  };

  useEffect(() => {
    let newType: GetPokemonProps[] = allPokemon;
    if (storeType.current.trim().length > 0) {
      console.log(storeType.current);
      newType = _filterPokemon(storeType.current as PokemonTypes);
    }
    setData(newType);
  }, [allPokemon]);
  return (
    <filterPokemon.Provider
      value={{
        data,
        isLoading,
        getFilterPokemon,
        type: storeType.current,
        getResetPokemon,
        getFavoritePokemon,
        favoritePokemonNames,
        addPokemonFavorite,
      }}
    >
      {children}
    </filterPokemon.Provider>
  );
};

export default FilterProvider;
