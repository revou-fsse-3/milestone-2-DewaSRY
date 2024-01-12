import { FC, HTMLAttributes, PropsWithChildren } from "react";
import usePokemonSearch from "@pages/navigation/context/useSearch";
import ButtonGetMore from "@components/ButtonGetMore";
interface PokemonGetMoreProps extends HTMLAttributes<HTMLDivElement> {}
type PokemonGetMoreComponents = FC<PokemonGetMoreProps> & PropsWithChildren;
const PokemonGetMore: PokemonGetMoreComponents = ({
  children,
  ...resProps
}) => {
  const { data, searchText } = usePokemonSearch();
  return (
    <div
      {...resProps}
      className={"" + `${resProps.className ? resProps.className : ""}`}
    >
      {data.length === 0 && searchText.length > 0 ? <ButtonGetMore /> : null}
    </div>
  );
};

export default PokemonGetMore;
