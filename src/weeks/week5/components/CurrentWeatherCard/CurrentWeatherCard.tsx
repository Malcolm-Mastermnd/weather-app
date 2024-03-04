import HomeIcon from '@mui/icons-material/Home';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Card, CircularProgress, IconButton, Typography } from "@mui/material";
import FlexXBox from "../common/FlexXBox";
import FlexYBox from "../common/FlexYBox";
import WeatherCondition from '../common/WeatherCondition';
import TempuratureRange from '../common/TempuratureRange';
import { Condition } from '../../types/weather-api.types';
import { TemperatureUnit, Temperature } from '../../types/types';
import { getTempDisplay } from '../utils/utils';
import { useEffect, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';

const ONE_SECOND = 1000;

interface CurrentWeaherCardProps {
  isLoading: boolean;
  isError: boolean;
  cityName: string;
  isHometown?: boolean;
  isFavorite?: boolean;
  weatherCondition?: Condition;
  currentTemp?: Temperature;
  lowTemp?: Temperature;
  highTemp?: Temperature;
  timeZone?: string;
  temperatureUnit: TemperatureUnit;
}

function CurrentWeaherCard({
  isLoading,
  isError,
  cityName,
  isHometown: initialIsHometown = false,
  isFavorite: initialIsFavorite = false,
  weatherCondition,
  currentTemp,
  lowTemp,
  highTemp,
  timeZone,
  temperatureUnit,
}: CurrentWeaherCardProps) {
  const [isCurrentlyHometown, handleHometownButtonClick] = useToggle(initialIsHometown);
  const [isCurrentlyFavorite, handleFavoriteButtonClick] = useToggle(initialIsFavorite);
  const [timeDisplay, setTimeDisplay] = useState<string>();

  useEffect(() => {
    if (timeZone) {
      const intervalId = setInterval(() => {
        setTimeDisplay(new Date().toLocaleTimeString(
          'en-US',
          { timeZone, hour: 'numeric', minute: 'numeric', second: 'numeric'},
        ));
      }, ONE_SECOND);
      return () => clearInterval(intervalId);
    }
  } , [timeZone]);

  return (
    <Card sx={{ width: '100%' }} elevation={5}>
      <FlexYBox sx={{ flexGrow: 1, padding: '16px' }}>

        {/* Header */}
        <FlexXBox p={2} justifyContent='space-between'>
          <Typography variant='h3'>{cityName}</Typography>
          <Box>
            {/* Hometown Icon Button */}
            <IconButton onClick={handleHometownButtonClick}>
              {isCurrentlyHometown ? <HomeIcon fontSize='large' /> : <HomeOutlineIcon fontSize='large' />}
            </IconButton>

            {/* Favorite Icon Button */}
            <IconButton onClick={handleFavoriteButtonClick}>
              {isCurrentlyFavorite ? <StarIcon fontSize='large' /> : <StarOutlineIcon fontSize='large' />}
            </IconButton>
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
                temperatureUnit={temperatureUnit}
              />
            </FlexYBox>

            {/* Time */}
            <Typography variant='h5'>{timeDisplay}</Typography>
          </FlexXBox>
        )}
      </FlexYBox>
    </Card>
  )
}

export default CurrentWeaherCard;
