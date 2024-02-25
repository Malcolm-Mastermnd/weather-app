import FlexYBox from '../../common/FlexYBox';
import { Card, Typography } from '@mui/material';
import WeatherCondition from '../../common/WeatherCondition';
import TempuratureRange from '../../common/TempuratureRange';
import { Condition } from '../../../types/weather-api.types';

interface ForecastCardsProp {
  dayOfTheWeek: string;
  weatherCondition: Condition;
  lowTemp: number;
  highTemp: number;
}

function ForecastCard({
  dayOfTheWeek,
  weatherCondition,
  lowTemp,
  highTemp,
}: ForecastCardsProp) {
  return (
    <Card elevation={5}>
      <FlexYBox alignItems='center' justifyContent='space-between' height='150px' p={3}>
        <Typography variant='subtitle1'>{dayOfTheWeek}</Typography>
        <WeatherCondition condition={weatherCondition} />
        <TempuratureRange lowTemp={lowTemp} highTemp={highTemp} />
      </FlexYBox>
    </Card>
  );
}

export default ForecastCard;
