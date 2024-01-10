import { FC, FormHTMLAttributes, PropsWithChildren, useRef } from "react";
import { Formik, FormikHelpers, FormikProps, Form } from "formik";
import PokemonInput from "./PokemonInput";
import PokemonDropDown from "./PokemonDropDown";
import PokemonGetMore from "./PokemonGetMore";
import * as YUP from "yup";

// import Panel from "@/common/Panel";
// import usePokemonSearch from "@/context/PokemonSearch/usePokemonSearch";

const initialValues = {
  name: "",
};
interface indexProps extends FormHTMLAttributes<HTMLFormElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  const pokemonSearch = useRef<HTMLDivElement | null>(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YUP.object({
        name: YUP.string().min(3, "more the 3"),
      })}
      onSubmit={(_value) => {}}
    >
      {(props: PokemonFormProps) => (
        <div ref={pokemonSearch} className="bg-white  ">
          <Form
            {...resProps}
            className={` ${resProps.className ? resProps.className : " "} `}
          >
            <PokemonInput
              props={props}
              label="name"
              placeholder="search pokemon by name (min 3 character)"
            />
          </Form>
          <PokemonDropDown props={props} parent={pokemonSearch.current!} />
          <PokemonGetMore className="" />
        </div>
      )}
    </Formik>
  );
};

export default index;
type initValue = typeof initialValues;
export type PokemonFormProps = FormikProps<initValue>;
export interface formSubmitHandler {
  (values: initValue, actions: FormikHelpers<initValue>): void;
}
