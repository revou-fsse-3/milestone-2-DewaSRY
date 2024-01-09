import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";
import { GetPokemonProps } from "@utils/pokemon/GetPokemonProps";
import { getCleanForward } from "@utils/StringOperations";
import { getObjectToStringArr } from "@/utils/ObjectOperations";
import H2 from "@common/H2";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: GetPokemonProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ pokemon, ...resProps }) => {
  let imgArr = getObjectToStringArr(pokemon?.sprites);

  return (
    <div
      {...resProps}
      className={
        "w-full  grid grid-cols-pokemon-gallery  gap-6 " +
        " place-content-center " +
        `${resProps.className ? resProps.className : ""}`
      }
    >
      {imgArr.map((img, id) => {
        let imageName = img.replace(
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
          ""
        );
        imageName = getCleanForward(imageName);
        return (
          <Fragment key={id}>
            <div className=" bg-title">
              <img alt={imageName} title={imageName} width={300} src={img} />
              <span>{imageName}</span>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default index;
