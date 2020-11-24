import React from "react";
import useVanHackAPI from "../../custom-hooks/useVanHackAPI";
import Jobs from "../../components/Jobs";
import Navbar from "../../components/Navbar";

export default () => {
  const [items] = useVanHackAPI();

  return (
    <>
      <Navbar />
      <Jobs items={items} />
    </>
  );
};
