import CityWeather from '../../components/CityWeather/CityWeather';
import FlexYBox from '../../components/common/FlexYBox';
import { Link, Typography } from '@mui/material';
import FlexXBox from '../../components/common/FlexXBox';
import { useHometownStore } from '../../context/zustand/UseHometown';
import { Link as RouterLink } from 'react-router-dom';

function HometownPage() {
  const { hometown } = useHometownStore();

  return (
    <FlexYBox gap={3} flexGrow={1}>
      {/* Header */}
      <FlexXBox justifyContent='center'>
        <Typography variant='h3'>My Hometown</Typography>
      </FlexXBox>

      {/* Content */}
      {!hometown ? (
        <FlexYBox flexGrow={1} gap={2} justifyContent='center' alignItems='center'>
          <Typography>You do not have a hometown set</Typography>
          <Typography>
            Set a hometown on the
            &nbsp;
            <Link component={RouterLink} to='/week5/search'>
              Search Page
            </Link>
          </Typography>
        </FlexYBox>
      ): (
        <CityWeather cityName={hometown} />
      )}
    </FlexYBox>
  );
}

export default HometownPage;
