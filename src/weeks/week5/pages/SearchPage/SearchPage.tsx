import CityWeather from '../../components/CityWeather/CityWeather';
import FlexYBox from '../../components/common/FlexYBox';
import SearchBox from '../../components/SearchBox/SearchBox';

function SearchPage() {
  return (
    <FlexYBox gap={6}>
      <SearchBox order={4} excited={false} />
      <CityWeather cityName='Baltimore' isHometown />
      <CityWeather cityName='San Diego' isFavorite />
      <CityWeather cityName='New Orleans' />
    </FlexYBox>
  );
}

export default SearchPage;
