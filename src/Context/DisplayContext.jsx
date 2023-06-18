import { createContext, useState } from "react";

export const DisplayContext = createContext();

export function DisplayContextProvider({ children }) {
  const [toggleDialogBox, setToggleDialogBox] = useState();
  const [currentHabit, setCurrentHabit] = useState(null);

  return (
    <DisplayContext.Provider
      value={{
        toggleDialogBox,
        setToggleDialogBox,
        setCurrentHabit,
        currentHabit,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
