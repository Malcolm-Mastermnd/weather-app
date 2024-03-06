import { Divider, Typography } from '@mui/material';
import FlexXBox from './FlexXBox';
import { Temperature } from '../../types/types';
import { getTempDisplay } from '../utils/utils';
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferencesContext';

interface TempuratureRangeProps {
  lowTemp: Temperature;
  highTemp: Temperature;
}

function TempuratureRange({
  lowTemp,
  highTemp,
}: TempuratureRangeProps) {
  const { temperatureUnit } = useContext(UserPreferencesContext);

  return (
    <FlexXBox alignItems='center'>
      <Typography>{`${getTempDisplay(lowTemp, temperatureUnit)} LO`}</Typography>
      <Divider sx={{ minHeight: '24px', borderColor: 'white', mx: 2 }} orientation='vertical' />
      <Typography>{`${getTempDisplay(highTemp, temperatureUnit)} HI`}</Typography>
    </FlexXBox>
  );
}

export default TempuratureRange;
