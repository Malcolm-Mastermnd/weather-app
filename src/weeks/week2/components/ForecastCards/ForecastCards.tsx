import FlexXBox from '../common/FlexXBox';
import { Box } from '@mui/material';
import ForecastCard from './ForecastCard/ForecastCard';

interface ForecastCardsProps {}

function ForecastCards({}: ForecastCardsProps) {
  return (
    <Box width='100%'>
      <FlexXBox justifyContent='space-between'>

        <ForecastCard
          dayOfTheWeek='Tuesday'
          weatherCondition='Sunny'
          lowTemp={65}
          highTemp={80}
        />
        <ForecastCard
          dayOfTheWeek='Wednesday'
          weatherCondition='Partly Cloudy'
          lowTemp={64}
          highTemp={79}
        />
        <ForecastCard
          dayOfTheWeek='Thursday'
          weatherCondition='Cloudy'
          lowTemp={70}
          highTemp={85}
        />
        <ForecastCard
          dayOfTheWeek='Friday'
          weatherCondition='Thunderstormy'
          lowTemp={62}
          highTemp={81}
        />
        <ForecastCard
          dayOfTheWeek='Saturday'
          weatherCondition='Thunderstormy'
          lowTemp={65}
          highTemp={77}
        />

      </FlexXBox>
    </Box>
  );
}

export default ForecastCards;
