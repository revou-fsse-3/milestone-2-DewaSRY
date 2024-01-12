import { BASE_URL } from ".";
import { makeFetchError } from "@libs/Error";
import { GetPokemonProps } from "@/utils/pokemon/GetPokemonProps";
import { addDocument, getDocument } from "@libs/indexDB";
export default async function GetPokemon(
  name = "",
  signal?: AbortSignal
): Promise<GetPokemonProps> {
  let POKEMON_URL = BASE_URL + "pokemon" + "/" + name;
  let pokemon = await getDocument<GetPokemonProps>(POKEMON_URL);
  if (!pokemon) {
    pokemon = await fetchPokemon(POKEMON_URL, signal);
    await addDocument(POKEMON_URL, pokemon);
  }
  // console.log(POKEMON_URL);
  // console.log(pokemon);
  return pokemon;
}

async function fetchPokemon(
  url: string,
  signal?: AbortSignal
): Promise<GetPokemonProps> {
  const req = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    signal: signal,
  });
  await makeFetchError(req, "Failed to fetch pokemon with this " + name);
  const response = (await req.json()) as unknown as GetPokemonProps;
  return response as GetPokemonProps;
}
