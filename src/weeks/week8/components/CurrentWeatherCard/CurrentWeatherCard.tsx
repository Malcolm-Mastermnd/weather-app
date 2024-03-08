import { Box, Card, CardActions, CircularProgress, IconButton, Typography } from "@mui/material";
import FlexXBox from "../common/FlexXBox";
import FlexYBox from "../common/FlexYBox";
import WeatherCondition from '../common/WeatherCondition';
import TempuratureRange from '../common/TempuratureRange';
import { Condition } from '../../types/weather-api.types';
import { Temperature } from '../../types/types';
import { getTempDisplay } from '../utils/utils';
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferencesContext';
import TimeDisplay from './TimeDisplay/TimeDisplay';
import FavoriteToggleButton from '../common/FavoriteToggleButton';
import HometownToggleButton from '../common/HometownToggleButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface CurrentWeaherCardProps {
  isLoading: boolean;
  isError: boolean;
  cityName: string;
  weatherCondition?: Condition;
  currentTemp?: Temperature;
  lowTemp?: Temperature;
  highTemp?: Temperature;
  timeZone?: string;
  showForecast: boolean;
  onForecastToggle: () => void;
}

function CurrentWeaherCard({
  isLoading,
  isError,
  cityName,
  weatherCondition,
  currentTemp,
  lowTemp,
  highTemp,
  timeZone,
  showForecast,
  onForecastToggle,
}: CurrentWeaherCardProps) {
  const { temperatureUnit } = useContext(UserPreferencesContext);

  return (
    <Card sx={{ width: '100%' }} elevation={5}>
      <FlexYBox sx={{ flexGrow: 1, padding: '16px' }}>

        {/* Header */}
        <FlexXBox p={2} justifyContent='space-between'>
          <Typography variant='h3'>{cityName}</Typography>
          <Box>
            <HometownToggleButton cityName={cityName} iconProps={{ fontSize: 'large' }} />
            <FavoriteToggleButton cityName={cityName} iconProps={{ fontSize: 'large' }} />
          </Box>
        </FlexXBox>

        {/* Content */}
        <FlexXBox justifyContent='center'>
          {isLoading && <CircularProgress />}
          {isError && <Typography>Error getting weather</Typography>}
        </FlexXBox>
        {weatherCondition && currentTemp && lowTemp && highTemp && timeZone && (
          <FlexXBox p={2} justifyContent='space-between' alignItems='center'>
            <WeatherCondition condition={weatherCondition} />

            {/* Tempuratures */}
            <FlexYBox alignItems='center'>
              <Typography variant='h5'>
                {getTempDisplay(currentTemp, temperatureUnit)}
              </Typography>
              <TempuratureRange
                lowTemp={lowTemp}
                highTemp={highTemp}
              />
            </FlexYBox>

            {/* Time */}
            <TimeDisplay timeZone={timeZone} />
          </FlexXBox>
        )}
      </FlexYBox>

      {/* Footer */}
      <CardActions>
        <FlexXBox flexGrow={1} justifyContent='flex-end'>
          <IconButton onClick={onForecastToggle}>
            {showForecast ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </IconButton>
        </FlexXBox>
      </CardActions>
    </Card>
  )
}

export default CurrentWeaherCard;
