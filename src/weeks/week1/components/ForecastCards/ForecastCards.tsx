import React from 'react';

type ForecastCardsStyles = {
  root: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px solid green',
}

const styles: ForecastCardsStyles = {
  root: {
    ...divWithBorder,
    height: '400px',
  },
}

interface ForecastCardsProps {
  order: number;
  excited: boolean;
}

function ForecastCards({
  order,
  excited,
}: ForecastCardsProps) {
  return (
    <div style={styles.root}>
      <div>Forecast Cards</div>
      <div>{`Order that this will be worked on: ${order}`}</div>
      <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
    </div>
  );
}

export default ForecastCards;
