import { BASE_URL } from ".";
import { makeFetchError } from "@libs/Error";
import { GetPokemonProps } from "@/utils/pokemon/GetPokemonProps";

export default async function GetPokemon(
  name = "",
  signal?: AbortSignal
): Promise<GetPokemonProps> {
  const req = await fetch(BASE_URL + "pokemon" + "/" + name, {
    headers: {
      "Content-Type": "application/json",
    },
    signal: signal,
  });
  await makeFetchError(req, "Failed to fetch pokemon with this " + name);
  const response = (await req.json()) as unknown as GetPokemonProps;
  return response as GetPokemonProps;
}
