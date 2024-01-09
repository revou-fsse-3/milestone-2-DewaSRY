import { FC, Fragment, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";

interface indexProps extends HTMLAttributes<HTMLElement> {}
type indexComponents = FC<indexProps>;
const index: indexComponents = ({ ...resProps }) => {
  return (
    <Fragment>
      <nav
        {...resProps}
        className={
          " relative " +
          "w-full max-w-[1000px] mx-auto " +
          `${resProps.className ? resProps.className : ""}`
        }
      >
        <div className="absolute  right-0 z-20"></div>
      </nav>
      <Outlet />
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
