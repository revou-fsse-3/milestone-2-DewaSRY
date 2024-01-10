import Shimmer from "@/common/Shimmer";
import { FC, Fragment, HTMLAttributes, PropsWithChildren } from "react";

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {}
type LoadingComponents = FC<LoadingProps> & PropsWithChildren;
const Loading: LoadingComponents = ({}) => {
  return (
    <>
      {Array(24)
        .fill(null)
        .map((_val, id) => (
          <Fragment key={id}>
            <Shimmer times={1} className="mb-2.5 py-[180px]" />
          </Fragment>
        ))}
    </>
  );
};

export default Loading;
