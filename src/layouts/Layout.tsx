import type { ReactNode, VFC } from "react";

import { Header } from "./Header";

type Props = {
  children: ReactNode;
};
export const Layout: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-indigo-400">
      <header className="flex w-full h-20">
        <Header />
      </header>
      <main className="flex flex-row w-full h-screen">{props.children}</main>
    </div>
  );
};
