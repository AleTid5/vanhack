import React from "react";
import Main from "./sections/main";
import { ConfigurationProvider } from "./contexts/ConfigurationContext";

function App() {
  return (
    <ConfigurationProvider>
      <div className="App">
        <Main />
      </div>
    </ConfigurationProvider>
  );
}

export default App;
