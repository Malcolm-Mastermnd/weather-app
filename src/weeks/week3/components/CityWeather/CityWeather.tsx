import { Box } from '@mui/material';
import CurrentWeaherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import useAxios from 'axios-hooks';
import { ForecastReturn } from '../../types/weather-api.types';
import ForecastCards from '../ForecastCards/ForecastCards';

interface CityWeatherProps {
  cityName: string;
  isHometown?: boolean;
  isFavorite?: boolean;
}

function CityWeather({
  cityName,
  isHometown,
  isFavorite,
}: CityWeatherProps) {
  const [{ data, loading, error }] = useAxios<ForecastReturn>({
    url:'https://api.weatherapi.com/v1/forecast.json',
    params: {
      key: import.meta.env.VITE_WEATHER_API_KEY,
      q: cityName,
      days: 7,
    },
  });

  return (
    <Box>
      <CurrentWeaherCard
        isLoading={loading}
        isError={!!error}
        cityName={cityName}
        isHometown={isHometown}
        isFavorite={isFavorite}
        weatherCondition={data?.current.condition}
        currentTemp={data?.current.temp_f}
        lowTemp={data?.forecast.forecastday[0]?.day.mintemp_f}
        highTemp={data?.forecast.forecastday[0]?.day.maxtemp_f}
        timeZone={data?.location.tz_id}
      />
      <ForecastCards
        isLoading={loading}
        isError={!!error}
        forecastDays={data?.forecast.forecastday}
        timeZone={data?.location.tz_id}
      />
    </Box>
  );
}

export default CityWeather;
