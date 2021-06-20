import { createContext, useContext, useState } from "react";



export const FormsContext = createContext({});
//@ts-ignore
export const MyProvider = ({ children }) => {
  const [state, setState] = useState({ stages: 0, values: [] });
  return (
    <FormsContext.Provider value={{name: 'itsik'}}>
      {children}
    </FormsContext.Provider>
  );
};