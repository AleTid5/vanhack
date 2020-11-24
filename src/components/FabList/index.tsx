import React, { ReactNode, useState } from "react";
import { Fab, List } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styles from "./styles";

interface iProps {
  children: ReactNode;
  onClose?: () => void;
}

const [openedPosition, closedPosition] = [16, -1000];

export default ({ children, onClose }: iProps) => {
  const [listPosition, setListPosition] = useState<number>(closedPosition);
  const classes = styles();

  const handleClick = () => {
    if (listPosition === closedPosition) {
      setListPosition(openedPosition);
    } else {
      setListPosition(closedPosition);
      typeof onClose !== "undefined" && onClose();
    }
  };

  return (
    <div className={classes.root}>
      <List className={classes.itemList} style={{ right: `${listPosition}px` }}>
        {children}
      </List>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <Add
          className={
            listPosition === openedPosition ? classes.rotate : undefined
          }
        />
      </Fab>
    </div>
  );
};
