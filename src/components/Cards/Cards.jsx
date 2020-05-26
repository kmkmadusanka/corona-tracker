import React from 'react';
// import material UI elements
import { Grid } from '@material-ui/core';
// import styles
import styles from './Cards.module.css';
import CardBody from './CardBody/CardBody';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading ...';
  }

  const cards = [
    {
      name: 'Infected',
      value: confirmed.value,
      date: lastUpdate,
      bottom: ' Number of active cases of COVID-19',
    },
    {
      name: 'Recovered',
      value: recovered.value,
      date: lastUpdate,
      bottom: ' Number of recoveries from COVID-19',
    },
    {
      name: 'Deaths',
      value: deaths.value,
      date: lastUpdate,
      bottom: ' Number of deaths caused by COVID-19',
    },
  ];

  const cardList = cards.map((card, index) => (
    <CardBody key={index} card={card} />
  ));

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardList}
      </Grid>
    </div>
  );
};

export default Cards;
