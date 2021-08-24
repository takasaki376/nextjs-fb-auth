import type { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};
export const Layout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-indigo-400">
      {props.children}
    </div>
  );
};
