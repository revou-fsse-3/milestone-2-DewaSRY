import { BASE_URL } from ".";
import { makeFetchError } from "@libs/Error";
import { GetAllProps, GetAllResult } from "@/utils/pokemon/GetAllPokemonProps";
export default async function GetAllPokemon(
  limit = 30,
  offset = 0,
  signal?: AbortSignal
): Promise<GetAllResult[]> {
  const req = await fetch(
    BASE_URL + "pokemon" + `?limit=${limit}&offset=${offset}`,
    {
      signal: signal,
    }
  );
  await makeFetchError(req, "failed to fetch all pokemon");
  const response = (await req.json()) as unknown as GetAllProps;
  return response.results;
}
