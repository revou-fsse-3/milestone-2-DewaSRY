import { FC, Fragment, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";
import SearchPokemon from "@components/PokemonSearch";
interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  return (
    <Fragment>
      <nav
        {...resProps}
        className={
          " relative z-20  " +
          "w-full max-w-[1000px] mx-auto " +
          `${resProps.className ? resProps.className : ""}`
        }
      >
        <div className="absolute top-0 right-0 w-5/12 flex justify-end">
          <SearchPokemon />
        </div>
      </nav>
      <main className="">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default index;
// export const loader: NavigationLoader<Object> = async ({ request }) => {
//   const auth = getCookies();
//   const url = new URL(request.url);
//   if (url.pathname !== "/") return {};
//   if (!auth) {
//     window.location.href = "/auth?mode=log-in";
//   } else {
//     window.location.href = "/category";
//   }
//   return {};
// };
