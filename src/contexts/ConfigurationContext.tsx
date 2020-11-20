import React, { createContext, ReactNode } from "react";
import defaultConfig from "../configurations/config.default.json";
import Exception from "../constants/exceptions";
import { iConfiguration } from "../interfaces";

interface iContext {
  configuration: iConfiguration;
}

const ConfigurationContext = createContext<iContext>({
  configuration: {},
} as iContext);
const { Provider } = ConfigurationContext;

const getEnvironmentConfiguration = () => {
  switch (process.env.NODE_ENV) {
    case "production": {
      return {
        ...defaultConfig,
        ...require("../configurations/config.prod.json"),
      };
    }
    case "development": {
      return {
        ...defaultConfig,
        ...require("../configurations/config.dev.json"),
      };
    }
    default: {
      throw Exception.INVALID_ENVIRONMENT;
    }
  }
};

const ConfigurationProvider = ({ children }: { children: ReactNode }) => (
  <Provider value={{ configuration: getEnvironmentConfiguration() }}>
    {children}
  </Provider>
);

export { ConfigurationContext, ConfigurationProvider };
