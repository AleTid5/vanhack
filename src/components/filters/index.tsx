import React, { useContext, useEffect, useState } from "react";
import FabList from "../FabList";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { Code, Flag, LocalAtm } from "@material-ui/icons";
import CountryFilter from "../filters/CountryFilter";
import TechnologyFilter from "../filters/TechnologyFilter";
import SalaryFilter from "../filters/SalaryFilter";
import { FilterContext } from "../../contexts/FilterContext";
import useLocalStorage from "../../custom-hooks/useLocalStorage";
import styles from "./styles";

export default ({ onFilter }: { onFilter: (...args: any) => void }) => {
  const { countries, salaryRange, technologies, setSalaryRange } = useContext(
    FilterContext
  );
  const [salaryIconColor, setSalaryIconColor] = useState<string>("#34dc87");
  const [salaryPulseShowed, setSalaryPulseShowed] = useLocalStorage(
    "show-salary-pulse"
  );

  const classes = styles();

  const handleOnClose = () => {
    onFilter(countries, salaryRange, technologies);
  };

  const handleSalaryRange = () => {
    setSalaryPulseShowed("true");
    setSalaryRange([0, 0]);
  };

  useEffect(() => {
    const [minSalary, maxSalary] = salaryRange;

    if (minSalary === 0 && 0 === maxSalary) {
      setSalaryIconColor("#acacac");
    } else {
      setSalaryIconColor("#34dc87");
    }
  }, [salaryRange]);

  return (
    <FabList onClose={handleOnClose}>
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "tomato" }}>
            <Flag />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<CountryFilter />} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ backgroundColor: "cornflowerblue" }}>
            <Code />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<TechnologyFilter />} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <>
            <Avatar
              className={`${classes.salaryAvatar} ${
                !salaryPulseShowed ? classes.avatarPulse : null
              }`}
              style={{ backgroundColor: salaryIconColor }}
              onClick={handleSalaryRange}
            >
              <LocalAtm />
            </Avatar>
          </>
        </ListItemAvatar>
        <ListItemText primary={<SalaryFilter />} />
      </ListItem>
    </FabList>
  );
};
