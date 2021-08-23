import React from "react";

export const StoreContext = React.createContext({});

export const StoreProvider: React.FC<{}> = (props) => {
  const { children } = props;

  const [state, setState] = React.useState({});

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
