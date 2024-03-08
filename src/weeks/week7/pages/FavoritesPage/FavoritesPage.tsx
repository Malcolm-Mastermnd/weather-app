import CityWeather from '../../components/CityWeather/CityWeather';
import FlexYBox from '../../components/common/FlexYBox';
import { Link, Typography } from '@mui/material';
import FlexXBox from '../../components/common/FlexXBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/redux/globalStore';
import { Link as RouterLink } from 'react-router-dom';

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.value);

  return (
    <FlexYBox gap={3} flexGrow={1}>
      {/* Header */}
      <FlexXBox justifyContent='center'>
        <Typography variant='h3'>My Favorite Cities</Typography>
      </FlexXBox>

      {/* Content */}
      {!favorites.length ? (
        <FlexYBox flexGrow={1} gap={2} justifyContent='center' alignItems='center'>
          <Typography>You do not have any favorites set</Typography>
          <Typography>
            Add a favorite city on the
            &nbsp;
            <Link component={RouterLink} to='/week7/search'>
              Search Page
            </Link>
          </Typography>
        </FlexYBox>
      ): (
        favorites.map((cityName) => (
          <CityWeather key={cityName} cityName={cityName} initialShowForecast={false} />
        ))
      )}
    </FlexYBox>
  );
}

export default FavoritesPage;
