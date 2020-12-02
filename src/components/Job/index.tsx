import React, {useContext} from "react";
import Job from "./Job";
import {Avatar, Card, CardActionArea, CardContent, Chip, Divider, Grid, List, Typography,} from "@material-ui/core";
import {FlagIcon} from "react-flag-kit";
import TimeAgo from "timeago-react";
import styles from "./styles";
import {iJob, iSkill} from "../../interfaces";
import {ConfigurationContext} from "../../contexts/ConfigurationContext";

interface Props extends iJob {
  showMainCountry: boolean;
}

export default ({
  country,
  city,
  currency,
  salary,
  link,
  newJob,
  positionName,
  mustHaveSkills,
  niceToHaveSkills,
  postDate,
  showMainCountry,
}: Props) => {
  const { configuration } = useContext(ConfigurationContext);

  const classes = styles();
  const getCountryCode = (country: string) => configuration.countries[country];

  const NewJob = () => (
    <Grid item xs={12}>
      <List>
        <Divider component="li" />
        <li
          style={{
            position: "relative",
            top: "-15px",
            backgroundColor: "white",
            margin: "2px 40% 0 40%",
          }}
        >
          <Chip
            label="New"
            className={classes.avatarPulse}
            style={{ color: "#fff", backgroundColor: "#4caf50" }}
            size="small"
          />
        </li>
      </List>
    </Grid>
  );

  return (
    <>
      {showMainCountry && (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={classes.spaceTop}
          style={{ textAlign: "left" }}
        >
          <Grid item xs={2} sm={1}>
            <FlagIcon
              key={country}
              code={getCountryCode(country)}
              size={32}
              style={{ marginBottom: "10px" }}
            />
          </Grid>
          <Grid item xs={2}>
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
                  <div>
                    <em>
                      <TimeAgo datetime={postDate} />
                    </em>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  {newJob ? (
                    <NewJob />
                  ) : (
                    <Divider variant="middle" className={classes.spaceBottom} />
                  )}
                  {positionName}
                </Grid>
                <Grid item xs={12}>
                  {mustHaveSkills?.map(({ name }: iSkill, key: number) => (
                    <Chip
                      className={classes.spacedBetween}
                      key={key}
                      size="small"
                      avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
                      label={name}
                      color="secondary"
                    />
                  ))}
                  {niceToHaveSkills?.map(({ name }: iSkill, key: number) => (
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
