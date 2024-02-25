import WeekSelect from '../../components/WeekSelect/WeekSelect';
import AppHeader from './components/AppHeader/AppHeader';
import SearchBox from './components/SearchBox/SearchBox';
import CityWeather from './components/CityWeather/CityWeather';
import { Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import FlexYBox from './components/common/FlexYBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <WeekSelect />
        <AppHeader order={3} excited={true} />
        <FlexYBox sx={{ height: 'calc(100% - 80px)', padding: '5% 15%', flexGrow: 1 }}>
          <SearchBox order={4} excited={false} />
          <FlexYBox gap={6}>
            <CityWeather cityName='Baltimore' isHometown />
            <CityWeather cityName='San Diego' isFavorite />
            <CityWeather cityName='New Orleans' />
          </FlexYBox>
        </FlexYBox>
      </Box>
    </ThemeProvider>
  );
}

export default App
