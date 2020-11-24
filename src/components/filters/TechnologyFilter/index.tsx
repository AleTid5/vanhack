import React, { useContext } from "react";
import ChipInput from "material-ui-chip-input";
import { FilterContext } from "../../../contexts/FilterContext";

export default () => {
  const { setTechnologies } = useContext(FilterContext);

  return (
    <ChipInput
      fullWidth
      onChange={setTechnologies}
      label="Enter technologies"
    />
  );
};
