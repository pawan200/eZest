import React from "react";
import "./App.css";
import Main from "./containers/Main/Main";
import { ReferenceDataContextProvider } from "./context/ReferenceDataContext";

const App = () => {
  return (
    <div className="App">
      <ReferenceDataContextProvider>
        <Main />
      </ReferenceDataContextProvider>
    </div>
  );
};

export default App;
