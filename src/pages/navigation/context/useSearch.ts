import { createContext, useContext } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";

const pokemonSearch = createContext({
  getSearchByName: (_name: string) => {},
  data: [] as GetPokemonProps[],
  getReset: () => {},
  searchText: "",
});
export default function usePokemonSearch() {
  const context = useContext(pokemonSearch);
  if (!context) throw Error("please use this inside pokemon search provider");
  return context;
}
export { pokemonSearch };
