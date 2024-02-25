import HomeIcon from '@mui/icons-material/Home';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Card, CircularProgress, Typography } from "@mui/material";
import FlexXBox from "../common/FlexXBox";
import FlexYBox from "../common/FlexYBox";
import WeatherCondition from '../common/WeatherCondition';
import TempuratureRange from '../common/TempuratureRange';
import { Condition } from '../../types/weather-api.types';

interface CurrentWeaherCardProps {
  isLoading: boolean;
  isError: boolean;
  cityName: string;
  isHometown?: boolean;
  isFavorite?: boolean;
  weatherCondition?: Condition;
  currentTemp?: number;
  lowTemp?: number;
  highTemp?: number;
  timeZone?: string;
}

function CurrentWeaherCard({
  isLoading,
  isError,
  cityName,
  isHometown,
  isFavorite,
  weatherCondition,
  currentTemp,
  lowTemp,
  highTemp,
  timeZone,
}: CurrentWeaherCardProps) {
  return (
    <Card sx={{ width: '100%', mb: 2 }} elevation={5}>
      <FlexYBox sx={{ flexGrow: 1, padding: '16px' }}>

        {/* Header */}
        <FlexXBox p={2} justifyContent='space-between'>
          <Typography variant='h3'>{cityName}</Typography>
          <Box>
            {isHometown ? <HomeIcon fontSize='large' /> : <HomeOutlineIcon fontSize='large' />}
            {isFavorite ? <StarIcon fontSize='large' /> : <StarOutlineIcon fontSize='large' />}
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
            <Typography variant='h5'>{`${currentTemp}°F`}</Typography>
            <TempuratureRange lowTemp={lowTemp} highTemp={highTemp} />
            </FlexYBox>

            {/* Time */}
            <Typography variant='h5'>{
              new Date().toLocaleTimeString(
                'en-US',
                { timeZone: timeZone, hour: 'numeric', minute: 'numeric' },
              )
            }</Typography>
          </FlexXBox>
        )}
      </FlexYBox>
    </Card>
  )
}

export default CurrentWeaherCard;
