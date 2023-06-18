import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [toggleDialogBox, setToggleDialogBox] = useState();

  return (
    <DisplayContext.Provider
      value={{
        toggleDialogBox,
        setToggleDialogBox,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
