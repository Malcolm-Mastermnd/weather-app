import { Divider, Typography } from '@mui/material';
import FlexXBox from './FlexXBox';
import { Temperature, TemperatureUnit } from '../../types/types';
import { getTempDisplay } from '../utils/utils';

interface TempuratureRangeProps {
  lowTemp: Temperature;
  highTemp: Temperature;
  temperatureUnit: TemperatureUnit;
}

function TempuratureRange({
  lowTemp,
  highTemp,
  temperatureUnit,
}: TempuratureRangeProps) {
  return (
    <FlexXBox alignItems='center'>
      <Typography>{`${getTempDisplay(lowTemp, temperatureUnit)} LO`}</Typography>
      <Divider sx={{ minHeight: '24px', borderColor: 'white', mx: 2 }} orientation='vertical' />
      <Typography>{`${getTempDisplay(highTemp, temperatureUnit)} HI`}</Typography>
    </FlexXBox>
  );
}

export default TempuratureRange;
