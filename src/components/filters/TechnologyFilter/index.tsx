import React, { useContext } from "react";
import ChipInput from "material-ui-chip-input";
import { FilterContext } from "../../../contexts/FilterContext";

export default () => {
  const { setTechnologies } = useContext(FilterContext);

  const handleChange = (chips: string[]) => {
    setTechnologies(chips.map((chip: string) => chip.toLowerCase()));
  };

  return (
    <ChipInput fullWidth onChange={handleChange} label="Enter technologies" />
  );
};
