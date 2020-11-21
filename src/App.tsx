import React from "react";
import Main from "./sections/main";
import { ConfigurationProvider } from "./contexts/ConfigurationContext";
import { JobsProvider } from "./contexts/JobsContext";

function App() {
  return (
    <ConfigurationProvider>
      <JobsProvider>
        <div className="App">
          <Main />
        </div>
      </JobsProvider>
    </ConfigurationProvider>
  );
}

export default App;
