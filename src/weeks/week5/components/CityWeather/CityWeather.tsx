import CurrentWeaherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import useAxios from 'axios-hooks';
import { ForecastReturn } from '../../types/weather-api.types';
import ForecastCards from '../ForecastCards/ForecastCards';
import { useEffect } from 'react';
import FlexYBox from '../common/FlexYBox';
import { Temperature } from '../../types/types';

const FIVE_MINUTES = 5 * 60 * 1000;

interface CityWeatherProps {
  cityName: string;
}

function CityWeather({
  cityName,
}: CityWeatherProps) {
  const [{ data, loading, error }, refetch] = useAxios<ForecastReturn>({
    url:'https://api.weatherapi.com/v1/forecast.json',
    params: {
      key: import.meta.env.VITE_WEATHER_API_KEY,
      q: cityName,
      days: 7,
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (data) { refetch() }
    }, FIVE_MINUTES);
    return () => clearInterval(intervalId);
  } , []);

  const currentTemp: Temperature | undefined =
    data ? {
      fahrenheit: data.current.temp_f,
      celcius: data.current.temp_c,
    } : undefined;
  
  const lowTemp: Temperature | undefined =
    data ? {
      fahrenheit: data.forecast.forecastday[0]?.day.mintemp_f,
      celcius: data.forecast.forecastday[0]?.day.mintemp_c,
    } : undefined;

  const highTemp: Temperature | undefined =
    data ? {
      fahrenheit: data.forecast.forecastday[0]?.day.maxtemp_f,
      celcius: data.forecast.forecastday[0]?.day.maxtemp_c,
    } : undefined;

  return (
    <FlexYBox gap={2}>
      <CurrentWeaherCard
        isLoading={loading}
        isError={!!error}
        cityName={cityName}
        weatherCondition={data?.current.condition}
        currentTemp={currentTemp}
        lowTemp={lowTemp}
        highTemp={highTemp}
        timeZone={data?.location.tz_id}
      />
      <ForecastCards
        isLoading={loading}
        isError={!!error}
        forecastDays={data?.forecast.forecastday}
        timeZone={data?.location.tz_id}
      />
    </FlexYBox>
  );
}

export default CityWeather;
