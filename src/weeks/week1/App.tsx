import React from 'react';
import WeekSelect from '../../components/WeekSelect/WeekSelect';
import AppHeader from './components/AppHeader/AppHeader';
import SearchBox from './components/SearchBox/SearchBox';
import CurrentWeaherCard from './components/CurrentWeatherCard/CurrentWeatherCard';
import ForecastCards from './components/ForecastCards/ForecastCards';

type AppStyles = {
  contentContainer: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px solid green',
}

const styles: AppStyles = {
  contentContainer: {
    ...divWithBorder,
    height: 'calc(100% - 80px)',
    padding: '5% 15%',
    overflowY: 'auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: undefined,
  },
}

function App() {
  return (
    <div>
      <WeekSelect />
      <AppHeader order={3} excited={true} />
      <div style={styles.contentContainer}>
        <SearchBox order={4} excited={false} />
        <CurrentWeaherCard order={1} excited={true} />
        <ForecastCards order={2} excited={true} />
      </div>
    </div>
  );
}

export default App
