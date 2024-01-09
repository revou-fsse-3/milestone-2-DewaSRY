import { useQuery } from "@tanstack/react-query";
import { GetAllPokemon } from "@/libs/pokemon";
import { GetAllResult } from "@/utils/pokemon/GetAllPokemonProps";
import ErrorFetching from "@/libs/Error";
export default function useQueryAllPokemon(limit?: number, offset?: number) {
  return useQuery<GetAllResult[], ErrorFetching>({
    queryKey: [`all-pokemon-${limit}-${offset}`],
    queryFn: ({ signal }) => GetAllPokemon(limit, offset, signal),
  });
}
