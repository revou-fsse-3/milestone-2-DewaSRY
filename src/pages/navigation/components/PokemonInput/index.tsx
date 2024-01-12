import { FC, InputHTMLAttributes, useEffect } from "react";
import usePokemonSearch from "@pages/navigation/context/useSearch";
import useDebounce from "@/features/hooks/useDebounce";
import { PokemonFormProps } from "@pages/navigation/container/SearchPokemon";
import Input from "@common/FormFormic/FormicInput";
interface PokemonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  props: PokemonFormProps;
  label: string;
}
type PokemonInputComponents = FC<PokemonInputProps>;
const PokemonInput: PokemonInputComponents = ({
  label,
  props,
  ...resProps
}) => {
  const { getSearchByName } = usePokemonSearch();
  const debounce = useDebounce(props.values.name);
  useEffect(() => {
    getSearchByName(debounce);
  }, [debounce]);
  return (
    <Input
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
      label={label}
    />
  );
};

export default PokemonInput;
