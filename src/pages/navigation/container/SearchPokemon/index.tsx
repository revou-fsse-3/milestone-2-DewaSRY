import { FC, FormHTMLAttributes, PropsWithChildren } from "react";
import { Formik, FormikHelpers, FormikProps, Form } from "formik";
import PokemonInput from "@pages/navigation/components/PokemonInput";
import SearchButton from "@pages/navigation/components/SearchButton";
import * as YUP from "yup";

import DropDown from "@pages/navigation/components/DropDown";
import SearchProvider from "@pages/navigation/context/SearchProvider";

interface indexProps extends FormHTMLAttributes<HTMLFormElement> {}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, ...resProps }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YUPSchemas}
      onSubmit={() => {}}
    >
      {(props: PokemonFormProps) => (
        <SearchProvider>
          <Form
            {...resProps}
            className={
              "relative " + ` ${resProps.className ? resProps.className : " "} `
            }
          >
            <PokemonInput
              placeholder="type pokemon here"
              props={props}
              label="name"
            />
            <SearchButton
              type="submit"
              className="cursor-pointer absolute right-0 top-0 "
            />
          </Form>

          <DropDown
            className="absolute  max-h-[15rem] overflow-y-auto px-8 rounded-xl bg-white "
            props={props}
          />
        </SearchProvider>
      )}
    </Formik>
  );
};
const initialValues = {
  name: "",
};
const YUPSchemas = YUP.object({
  name: YUP.string().min(3, "more the 3"),
});

export default index;
type initValue = typeof initialValues;
export type PokemonFormProps = FormikProps<initValue>;
export interface formSubmitHandler {
  (values: initValue, actions: FormikHelpers<initValue>): void;
}
