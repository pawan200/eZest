import React, { createContext, useState } from "react";

export const userDetailsContext = createContext();

const ReferenceDataContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState();

  return (
    <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </userDetailsContext.Provider>
  );
};

export { ReferenceDataContextProvider };
