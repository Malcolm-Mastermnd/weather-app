import HomeIcon from '@mui/icons-material/Home';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Card, Typography } from "@mui/material";
import FlexXBox from "../common/FlexXBox";
import FlexYBox from "../common/FlexYBox";
import WeatherCondition, { WeatherConditionType } from '../common/WeatherCondition';
import TempuratureRange from '../common/TempuratureRange';

interface CurrentWeaherCardProps {
  cityName: string;
  isHometown?: boolean;
  isFavorite?: boolean;
  weatherCondition: WeatherConditionType;
  currentTemp: number;
  lowTemp: number;
  highTemp: number;
  localTime: Date;
}

function CurrentWeaherCard({
  cityName,
  isHometown,
  isFavorite,
  weatherCondition,
  currentTemp,
  lowTemp,
  highTemp,
  localTime,
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
        <FlexXBox p={2} justifyContent='space-between'>
          <WeatherCondition condition={weatherCondition} />

          {/* Tempuratures */}
          <FlexYBox alignItems='center'>
            <Typography variant='h5'>{`${currentTemp}°F`}</Typography>
            <TempuratureRange lowTemp={lowTemp} highTemp={highTemp} />
          </FlexYBox>

          {/* Time */}
          <Typography variant='h5'>{localTime.toLocaleTimeString()}</Typography>
        </FlexXBox>
      </FlexYBox>
    </Card>
  )
}

export default CurrentWeaherCard;
