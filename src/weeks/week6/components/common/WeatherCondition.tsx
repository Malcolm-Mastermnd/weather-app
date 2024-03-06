import FlexYBox from './FlexYBox';
import { Box, Typography } from '@mui/material';
import { Condition } from '../../types/weather-api.types';

interface WeatherConditionProps {
  condition: Condition;
}

function WeatherCondition({
  condition,
}: WeatherConditionProps) {
  return (
    <FlexYBox alignItems='center'>
      <Box component='img' src={condition.icon} />
      <Typography>{condition.text}</Typography>
    </FlexYBox>
  );
}

export default WeatherCondition;
