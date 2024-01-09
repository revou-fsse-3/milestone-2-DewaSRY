import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GetAllResult } from "@utils/pokemon/GetAllPokemonProps";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import ErrorFetching from "@/libs/Error";
const pokemonInitValue = {
  allPokemon: [] as GetPokemonProps[],
  allPokemonNames: [] as GetAllResult[],
  isLoading: false,
  error: null as null | ErrorFetching,
};
type Actions = {
  setAllPokemon: (data: GetPokemonProps[]) => void;
  setAllPokemonNames: (data: GetAllResult[]) => void;
  setIsLoading: (data: boolean) => void;
  setIsError: (data: null | ErrorFetching) => void;
};
type State = typeof pokemonInitValue;
const StatePokemon = create<State & Actions>()(
  immer((set) => ({
    ...pokemonInitValue,
    setAllPokemon: (data) =>
      set((s) => {
        s.allPokemon = [...s.allPokemon, ...data];
      }),
    setAllPokemonNames: (data) =>
      set((s) => {
        s.allPokemonNames = [...s.allPokemonNames, ...data];
      }),
    setIsLoading: (data) =>
      set((s) => {
        s.isLoading = data;
      }),
    setIsError: (data) =>
      set((s) => {
        s.error = data;
      }),
  }))
);

export default StatePokemon;

export { pokemonInitValue };
