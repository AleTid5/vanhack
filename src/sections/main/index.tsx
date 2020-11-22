import React from "react";
import useVanHackAPI from "../../custom-hooks/useVanHackAPI";
import Jobs from "../../components/Jobs";

export default () => {
  const [items] = useVanHackAPI();

  return <Jobs jobs={items} />;
};
