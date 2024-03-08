import { useState } from 'react';
import CityWeather from '../../components/CityWeather/CityWeather';
import FlexYBox from '../../components/common/FlexYBox';
import SearchBox from '../../components/SearchBox/SearchBox';
import { SearchedCity } from '../../types/weather-api.types';

function SearchPage() {
  const [selectedCity, setSelectedCity] = useState<SearchedCity>();

  return (
    <FlexYBox gap={6} flexGrow={1}>
      <SearchBox onCitySelect={setSelectedCity} />

      {selectedCity && (
        <CityWeather cityName={selectedCity.name} />
      )}
    </FlexYBox>
  );
}

export default SearchPage;
