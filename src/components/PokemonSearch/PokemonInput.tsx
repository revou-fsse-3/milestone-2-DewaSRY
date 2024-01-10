import { FC, InputHTMLAttributes, useEffect } from "react";
import usePokemonSearch from "@context/PokemonSearch/usePokemonSearch";
import useDebounce from "@/features/hooks/useDebounce";
import { PokemonFormProps } from "./index";
import Input from "@common/FormFormic/FormicInput";
import { CiSearch } from "react-icons/ci";
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
    <div className="flex justify-end items-center px-4 ">
      <Input
        {...resProps}
        className={`${resProps.className ? resProps.className : ""}`}
        label={label}
      />
      <CiSearch className="text-4xl" />
    </div>
  );
};

export default PokemonInput;
