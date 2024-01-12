import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import usePokemon from "@store/StatePokemon";
import { filterPokemon } from "./useFilterPokemon";
import {
  PokemonType,
  PokemonTypes,
  filterPokemonType,
} from "@utils/pokemon/PokemonType";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
interface FilterProviderProps extends HTMLAttributes<HTMLDivElement> {}
type FilterProviderComponents = FC<FilterProviderProps> & PropsWithChildren;
const FilterProvider: FilterProviderComponents = ({ children }) => {
  const { allPokemon, isLoading } = usePokemon();
  const [data, setData] = useState(allPokemon);
  const storeType = useRef<PokemonTypes | "" | "favorite">("");

  const setFilterPokemon = async (
    data: GetPokemonProps[],
    type?: PokemonType | "favorite"
  ) => {
    if (type?.trim()) {
      storeType.current = type;
    } else {
      storeType.current = "";
    }
    setData(data);
  };

  useEffect(() => {
    let newType: GetPokemonProps[] = allPokemon;
    if (storeType.current.trim().length > 0) {
      newType = filterPokemonType(
        allPokemon,
        storeType.current as PokemonTypes
      );
    }
    setData(newType);
  }, [allPokemon]);
  return (
    <filterPokemon.Provider
      value={{
        data,
        isLoading,
        setFilterPokemon,
        type: storeType.current,
      }}
    >
      {children}
    </filterPokemon.Provider>
  );
};

export default FilterProvider;
