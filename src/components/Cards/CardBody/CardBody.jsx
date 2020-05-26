import React from 'react';
import cx from 'classnames';
// import material UI elements
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import styles
import styles from './CardBody.module.css';

// import react count
import CountUp from 'react-countup';

function CardBody({ card: { name, value, date, bottom } }) {
  return (
    <React.Fragment>
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles[name])}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={value} duration={2.5} separator="," />
          </Typography>
          <Typography
            className={styles.typographyPadding}
            color="textSecondary"
          >
            {new Date(date).toDateString()}
          </Typography>
          <Typography variant="body2">{bottom}</Typography>
        </CardContent>
      </Grid>
    </React.Fragment>
  );
}

export default CardBody;
