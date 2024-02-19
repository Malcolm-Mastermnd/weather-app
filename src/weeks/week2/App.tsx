import React from 'react';
import WeekSelect from '../../components/WeekSelect/WeekSelect';
import AppHeader from './components/AppHeader/AppHeader';
import SearchBox from './components/SearchBox/SearchBox';
import CurrentWeaherCard from './components/CurrentWeatherCard/CurrentWeatherCard';
import ForecastCards from './components/ForecastCards/ForecastCards';
import { Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

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
    <ThemeProvider theme={theme}>
      <Box>
        <WeekSelect />
        <AppHeader order={3} excited={true} />
        <Box style={styles.contentContainer}>
          <SearchBox order={4} excited={false} />
          <CurrentWeaherCard
            cityName='Baltimore'
            isHometown
            weatherCondition='Cloudy'
            currentTemp={35}
            lowTemp={20}
            highTemp={39}
            localTime={new Date()}
          />
          <CurrentWeaherCard
            cityName='San Diego'
            isFavorite
            weatherCondition='Sunny'
            currentTemp={79}
            lowTemp={63}
            highTemp={82}
            localTime={new Date()}
          />
          <CurrentWeaherCard
            cityName='New Orleans'
            weatherCondition='Partly Cloudy'
            currentTemp={66}
            lowTemp={52}
            highTemp={70}
            localTime={new Date()}
          />
          <ForecastCards />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App
