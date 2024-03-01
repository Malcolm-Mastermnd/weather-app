import CityWeather from '../../components/CityWeather/CityWeather';
import FlexYBox from '../../components/common/FlexYBox';
import { Typography } from '@mui/material';
import FlexXBox from '../../components/common/FlexXBox';

function FavoritesPage() {
  return (
    <FlexYBox gap={3}>
      {/* Header */}
      <FlexXBox flexGrow={1} justifyContent='center'>
        <Typography variant='h3'>My Favorite Cities</Typography>
      </FlexXBox>

      {/* Content */}
      <CityWeather cityName='San Diego' isFavorite />
    </FlexYBox>
  );
}

export default FavoritesPage;
