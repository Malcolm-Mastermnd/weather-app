import React from 'react';

type AppHeaderStyles = {
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

const styles: AppHeaderStyles = {
  root: {
    ...divWithBorder,
    height: '80px',
  },
}

interface AppHeaderProps {
  order: number;
  excited: boolean;
}

function AppHeader({
  order,
  excited,
}: AppHeaderProps) {
  return (
    <div style={styles.root}>
      <div>Header</div>
      <div>{`Order that this will be worked on: ${order}`}</div>
      <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
    </div>
  );
}

export default AppHeader;
