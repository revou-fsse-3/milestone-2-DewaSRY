import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";
import Button, { ButtonTypes } from "@/common/Button";
import useFilterPokemon from "../context/useFilterPokemon";
import useFavorite from "@/features/store/StateFavoritePokemon";
import { FetchPokemonByName } from "@libs/pokemon";
interface ButtonFavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
type ButtonFavoriteComponents = FC<ButtonFavoriteProps> & PropsWithChildren;
const ButtonFavorite: ButtonFavoriteComponents = ({
  children,
  ...resProps
}) => {
  const { favoritePokemonNames } = useFavorite();
  const { setFilterPokemon, type } = useFilterPokemon();
  const getFavoritePokemon = async () => {
    const favoritePokemon = await FetchPokemonByName(favoritePokemonNames);
    setFilterPokemon(favoritePokemon, "favorite");
  };
  return (
    <Button
      {...resProps}
      disabled={type === "favorite"}
      onClick={getFavoritePokemon}
      ButtonType={ButtonTypes.FiveButton}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      Favorite ({favoritePokemonNames.length})
    </Button>
  );
};

export default ButtonFavorite;
