import { Divider, Typography } from '@mui/material';
import FlexXBox from './FlexXBox';

interface TempuratureRangeProps {
  lowTemp: number;
  highTemp: number;
}

function TempuratureRange({
  lowTemp,
  highTemp,
}: TempuratureRangeProps) {
  return (
    <FlexXBox alignItems='center'>
      <Typography>{`${lowTemp}°F LO`}</Typography>
      <Divider sx={{ minHeight: '24px', borderColor: 'white', mx: 2 }} orientation='vertical' />
      <Typography>{`${highTemp}°F HI`}</Typography>
    </FlexXBox>
  );
}

export default TempuratureRange;
