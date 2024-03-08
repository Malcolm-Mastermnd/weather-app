import { AppBar, Box, ToggleButton, ToggleButtonGroup, Toolbar } from '@mui/material';
import FlexXBox from '../common/FlexXBox';
import HeaderLink from './HeaderLink/HeaderLink';
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferencesContext';
import WeatherlyImage from '../../../../assets/Weatherly-Logo-Horizontal.png';

export const APP_HEADER_HEIGHT = 64;

function AppHeader() {
  const {
    temperatureUnit,
    setTemperatureUnit,
  } = useContext(UserPreferencesContext);

  return (
    <AppBar sx={{ height: `${APP_HEADER_HEIGHT}px` }} position='fixed'>
      <Toolbar>
        {/* Logo */}
        <FlexXBox>
          <Box
            component='img'
            src={WeatherlyImage}
            alt='Weatherly Logo'
            height='50px'
            width='auto'
            flexGrow={1}
          />
        </FlexXBox>
        {/* Links */}
        <FlexXBox flexGrow={1} justifyContent='center' padding={3}>
          <FlexXBox gap={4}>
            <HeaderLink to='/week7/search' title='Search' />
            <HeaderLink to='/week7/hometown' title='My Hometown' />
            <HeaderLink to='/week7/favorites' title='My Favorites' />
          </FlexXBox>
        </FlexXBox>
        {/* Tempurature Toggle */}
        <FlexXBox justifyContent='flex-end'>
          <ToggleButtonGroup value={temperatureUnit}>
            <ToggleButton value='F' onClick={() => setTemperatureUnit('F')}>°F</ToggleButton>
            <ToggleButton value='C' onClick={() => setTemperatureUnit('C')}>°C</ToggleButton>
          </ToggleButtonGroup>
        </FlexXBox>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
