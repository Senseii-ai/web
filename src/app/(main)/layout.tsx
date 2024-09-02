import React from "react";

const Home = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return <div className="h-full w-full">{children}</div>;
};
export default Home;
