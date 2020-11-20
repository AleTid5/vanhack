import React, { useContext, useEffect, useState } from "react";
import { ConfigurationContext } from "../../contexts/ConfigurationContext";
import { iJob } from "../../interfaces";
import { fetchJobs } from "./fetchJobs";

export default () => {
  const { configuration } = useContext(ConfigurationContext);
  const [items, setItems] = useState<iJob[]>([]);

  useEffect(() => {
    fetchJobs(configuration).then(setItems);
  }, []);

  return [items];
};
