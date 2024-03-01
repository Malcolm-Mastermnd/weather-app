import FlexXBox from '../common/FlexXBox';
import { Box } from '@mui/material';
import ForecastCard from './ForecastCard/ForecastCard';
import { ForecastDay } from '../../types/weather-api.types';
import { TemperatureUnit } from '../../types/types';

interface ForecastCardsProps {
  forecastDays?: ForecastDay[];
  timeZone?: string;
  isLoading: boolean;
  isError: boolean;
  temperatureUnit: TemperatureUnit;
}

function ForecastCards({
  forecastDays = [],
  timeZone,
  isError,
  isLoading,
  temperatureUnit,
}: ForecastCardsProps) {
  if (isLoading) return <FlexXBox justifyContent='center'>Loading forecast...</FlexXBox>;
  if (isError) return <FlexXBox justifyContent='center'>Error getting forecast</FlexXBox>;
  if (!forecastDays.length) return <FlexXBox justifyContent='center'>No forecast data</FlexXBox>;
  
  return (
    <Box width='100%'>
      <FlexXBox justifyContent='space-between'>
        {forecastDays.map((day) => (
          <ForecastCard
            key={day.date}
            dayOfTheWeek={
              new Date(day.date + 'T00:00:00').toLocaleDateString(
                'en-US',
                {
                  weekday: 'long',
                  timeZone: timeZone,
                }
              )
            }
            weatherCondition={day.day.condition}
            lowTemp={{
              fahrenheit: day.day.mintemp_f,
              celcius: day.day.mintemp_c,
            }}
            highTemp={{
              fahrenheit: day.day.maxtemp_f,
              celcius: day.day.maxtemp_c,
            }}
            temperatureUnit={temperatureUnit}
          />
        ))}
      </FlexXBox>
    </Box>
  );
}

export default ForecastCards;
