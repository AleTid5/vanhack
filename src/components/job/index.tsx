import React from "react";
import { IJob } from "../../interfaces/IJob";
import Job from "./Job";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import styles from "./styles";
import { ISkill } from "../../interfaces/ISkill";

interface Props extends IJob {
  jump: boolean;
}

export default ({
  country,
  city,
  currency,
  salary,
  link,
  positionName,
  mustHaveSkills,
  niceToHaveSkills,
  jump,
}: Props) => {
  const classes = styles();

  return (
    <>
      {jump && (
        <Grid
          direction="row"
          justify="flex-start"
          alignItems="center"
          xs={12}
          className={classes.spaceTop}
        >
          <Grid item xs={3}>
            <Typography variant="h4" gutterBottom>
              {country}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Job onClick={() => window.open(link)}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={6}>
                  <div>{country}</div>
                  <div>
                    <b>{city}</b>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div>
                    {salary ? (
                      <b>
                        {salary}K {currency}
                      </b>
                    ) : (
                      "Not informed"
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Divider variant="middle" className={classes.spaceBottom} />
                  {positionName}
                </Grid>
                <Grid item xs={12}>
                  {mustHaveSkills?.map(({ name }: ISkill, key: number) => (
                    <Chip
                      className={classes.spacedBetween}
                      key={key}
                      size="small"
                      avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
                      label={name}
                      color="secondary"
                    />
                  ))}
                  {niceToHaveSkills?.map(({ name }: ISkill, key: number) => (
                    <Chip
                      className={classes.spacedBetween}
                      key={key}
                      size="small"
                      avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
                      label={name}
                      color="secondary"
                      variant="outlined"
                    />
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Job>
    </>
  );
};
