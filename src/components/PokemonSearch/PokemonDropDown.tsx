import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import usePokemonSearch from "@/context/PokemonSearch/usePokemonSearch";
import PokemonSearchCard from "./PokemonSearchCard";
import Panel from "@/common/Panel";
import { PokemonFormProps } from ".";
interface PokemonDropDownProps extends HTMLAttributes<HTMLDivElement> {
  parent: HTMLDivElement;
  props: PokemonFormProps;
}
type PokemonDropDownComponents = FC<PokemonDropDownProps> & PropsWithChildren;
const PokemonDropDown: PokemonDropDownComponents = ({
  children,
  parent,
  props,
  ...resProps
}) => {
  const { data, getReset } = usePokemonSearch();
  const handleCloseDopeDown = () => {
    getReset();
    props.resetForm();
  };
  return (
    <div
      {...resProps}
      className={
        "bg-white max-h-[15rem] overflow-y-auto px-4" +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {data.length > 0 ? (
        <Panel handleClose={handleCloseDopeDown} parent={parent}>
          {data.map((p, id) => (
            <Fragment key={p.name + id}>
              <PokemonSearchCard pokemon={p} />
            </Fragment>
          ))}
        </Panel>
      ) : null}
    </div>
  );
};

export default PokemonDropDown;
