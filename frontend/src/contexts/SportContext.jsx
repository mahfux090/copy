import { createContext } from "react";
import { posts, albums } from "../data";

export const SportContext = createContext(null);

const SportContextProvider = ({ children }) => {
  const value = { posts, albums };
  return (
    <SportContext.Provider value={value}>{children}</SportContext.Provider>
  );
};

export default SportContextProvider;
