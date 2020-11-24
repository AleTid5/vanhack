import React, { useContext, useState } from "react";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import { FlagIcon } from "react-flag-kit";
import { FilterContext } from "../../../contexts/FilterContext";
import { iJob } from "../../../interfaces";
import styles from "./styles";
import { ConfigurationContext } from "../../../contexts/ConfigurationContext";

export default () => {
  const { configuration } = useContext(ConfigurationContext);
  const { jobs, setCountries } = useContext(FilterContext);
  const [selectedFlag, setSelectedFlag] = useState<string[]>([]);
  const classes = styles();

  const countries = [...new Set(jobs.map((job: iJob) => job.country))];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedCountries = event.target.value as string[];
    setSelectedFlag(selectedCountries);
    setCountries(selectedCountries);
  };

  const getCountryCode = (country: string) => configuration.countries[country];

  return (
    <FormControl className={classes.form}>
      <InputLabel htmlFor="select-country">Countries</InputLabel>
      <Select
        autoWidth={false}
        multiple
        value={selectedFlag}
        onChange={handleChange}
        inputProps={{
          id: "select-country",
        }}
        renderValue={(countries) =>
          (countries as string[]).map((country) => (
            <FlagIcon key={country} code={getCountryCode(country)} size={16} />
          ))
        }
      >
        {countries.map((country: string) => (
          <MenuItem key={country} value={country}>
            <ListItemText primary={country} />
            <Checkbox checked={selectedFlag.indexOf(country) > -1} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
