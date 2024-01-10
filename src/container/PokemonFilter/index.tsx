import {
  FC,
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import {
  PokemonType,
  TypeArray,
  matherType,
  PokemonTypes,
} from "@utils/pokemon/PokemonType";
import useFilterPokemon from "@context/PokemonFilter/useFilterPokemon";
import usePokemon from "@/context/PokemonList/usePokemon";
import Button, { ButtonTypes } from "@/common/Button";
import Expanded from "@common/Expanded";
interface indexProps extends HTMLAttributes<HTMLDivElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const navElement = useRef<null | HTMLElement>(null);
  const {
    getFilterPokemon,
    type,
    getResetPokemon,
    getFavoritePokemon,
    data,
    isLoading,
  } = useFilterPokemon();
  const { getMorePokemon, allPokemon } = usePokemon();
  const handleType = (type: PokemonType) => () => {
    getFilterPokemon(type);
  };
  useEffect(() => {}, []);
  return (
    <div
      {...resProps}
      className={
        " sticky  top-0 z-10 h-[3rem] max-w-[1000px] m-auto " +
        `   ${resProps.className ? resProps.className : ""}`
      }
    >
      <Expanded
        expended={
          <nav
            ref={navElement}
            className=" mt-8 bg-white px-8 py-2 rounded-xl "
          >
            <span className="underline text-2xl block">Pokemon table</span>
            <span className="inline-block">({allPokemon.length}) Pokemon</span>
            <span className="inline-block mx-4">
              {type.length ? `type #${type} (${data.length}) ` : ""}
            </span>
          </nav>
        }
      >
        <div className="bg-white px-8 pb-2 absolute translate-y-[-10px]">
          <h3 className="text-lg font-light my-5">
            <span className=" underline ">Pokemon type</span>
          </h3>
          {TypeArray.map((type, id) => (
            <Fragment key={type + id}>
              <Button
                className={` ${type} text-lg font-thin mr-4 `}
                onClick={handleType(matherType(type as PokemonTypes))}
              >
                {type}
              </Button>
            </Fragment>
          ))}
          <Button onClick={getResetPokemon}>ALl Pokemon</Button>
          <Button onClick={getFavoritePokemon}>Favorite</Button>
          <div className="flex justify-between">
            <Button
              isLoading={isLoading}
              ButtonType={ButtonTypes.PrimaryButton}
              onClick={getMorePokemon}
            >
              GetMore Pokemon
            </Button>
          </div>
        </div>
      </Expanded>
    </div>
  );
};

export default index;
