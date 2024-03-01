import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import CurrentWeaherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import useAxios from 'axios-hooks';
import { ForecastReturn } from '../../types/weather-api.types';
import ForecastCards from '../ForecastCards/ForecastCards';
import { useEffect, useState } from 'react';
import FlexXBox from '../common/FlexXBox';
import FlexYBox from '../common/FlexYBox';
import { Temperature, TemperatureUnit } from '../../types/types';

const FIVE_MINUTES = 5 * 60 * 1000;

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
  const [temperatureUnit, setTempuratureUnit] = useState<TemperatureUnit>('F');

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
      <FlexXBox justifyContent='flex-end'>
        <ToggleButtonGroup value={temperatureUnit}>
          <ToggleButton value='F' onClick={() => setTempuratureUnit('F')}>°F</ToggleButton>
          <ToggleButton value='C' onClick={() => setTempuratureUnit('C')}>°C</ToggleButton>
        </ToggleButtonGroup>
      </FlexXBox>
      <CurrentWeaherCard
        isLoading={loading}
        isError={!!error}
        cityName={cityName}
        isHometown={isHometown}
        isFavorite={isFavorite}
        weatherCondition={data?.current.condition}
        currentTemp={currentTemp}
        lowTemp={lowTemp}
        highTemp={highTemp}
        timeZone={data?.location.tz_id}
        temperatureUnit={temperatureUnit}
      />
      <ForecastCards
        isLoading={loading}
        isError={!!error}
        forecastDays={data?.forecast.forecastday}
        timeZone={data?.location.tz_id}
        temperatureUnit={temperatureUnit}
      />
    </FlexYBox>
  );
}

export default CityWeather;
