import { createContext, useContext } from "react";
import { PokemonType, PokemonTypes } from "@utils/pokemon/PokemonType";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import { pokemonInitValue } from "@store/StateFavoritePokemon";
const filterPokemon = createContext({
  getFilterPokemon: async (_type: PokemonType) => {},
  data: [] as GetPokemonProps[],
  isLoading: false,
  type: "" as PokemonTypes | "" | "favorite",
  getResetPokemon: () => {},
  getFavoritePokemon: async () => {},
  addPokemonFavorite: (_data: string) => {},
  ...pokemonInitValue,
});

export default function useFilterPokemon() {
  const context = useContext(filterPokemon);
  if (!context)
    throw Error("please use this hooks inside the filterPokemon context");
  return context;
}

export { filterPokemon };
