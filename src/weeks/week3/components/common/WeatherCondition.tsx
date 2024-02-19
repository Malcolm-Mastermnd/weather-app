import SunnyIcon from '@mui/icons-material/WbSunny';
import CloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import FlexYBox from './FlexYBox';
import { Typography } from '@mui/material';

export type WeatherConditionType = 'Sunny' | 'Partly Cloudy' | 'Cloudy' | 'Thunderstormy';

const weatherConditionToIcon = (condition: WeatherConditionType) => {
  switch(condition) {
    case 'Sunny':
      return <SunnyIcon fontSize='large' />;
    case 'Partly Cloudy':
        return <FilterDramaIcon fontSize='large' />;
    case 'Cloudy':
      return <CloudyIcon fontSize='large' />;
    case 'Thunderstormy':
      return <ThunderstormIcon fontSize='large' />;
    default:
      return <></>
  }
}

interface WeatherConditionProps {
  condition: WeatherConditionType;
}

function WeatherCondition({
  condition,
}: WeatherConditionProps) {
  return (
    <FlexYBox alignItems='center'>
      {weatherConditionToIcon(condition)}
      <Typography>{condition}</Typography>
    </FlexYBox>
  );
}

export default WeatherCondition;
