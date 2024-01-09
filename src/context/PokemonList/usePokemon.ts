import { createContext, useContext } from "react";
import { pokemonInitValue } from "@store/StatePokemon";
const pokemon = createContext({
  ...pokemonInitValue,
  getMorePokemon: () => {},
});

export default function usePokemon() {
  const context = useContext(pokemon);
  if (!context) throw Error("please use Pokemon filter inside the provider");
  return context;
}
export { pokemon };
