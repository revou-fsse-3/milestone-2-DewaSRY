import { GetAllResult } from "@/utils/pokemon/GetAllPokemonProps";
import GetPokemon from "./GetPokemon";

export default async function FetchPokemonByName(pokemonNames: GetAllResult[]) {
  try {
    const mapPokemon = pokemonNames.map(async (p) => await GetPokemon(p.name));
    const result = await Promise.all(mapPokemon);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw Error("failed to fetch pokemon ");
    } else return [];
  }
}
