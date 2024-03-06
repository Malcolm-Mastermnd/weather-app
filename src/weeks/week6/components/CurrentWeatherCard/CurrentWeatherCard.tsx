import HomeIcon from '@mui/icons-material/Home';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Box, Card, CircularProgress, IconButton, Typography } from "@mui/material";
import FlexXBox from "../common/FlexXBox";
import FlexYBox from "../common/FlexYBox";
import WeatherCondition from '../common/WeatherCondition';
import TempuratureRange from '../common/TempuratureRange';
import { Condition } from '../../types/weather-api.types';
import { Temperature } from '../../types/types';
import { getTempDisplay } from '../utils/utils';
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferencesContext';
import { useHometownStore } from '../../context/zustand/UseHometown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../context/redux/globalStore';
import { addToFavorites, removeFromFavorites } from '../../context/redux/useFavoritesStore';
import TimeDisplay from './TimeDisplay/TimeDisplay';

interface CurrentWeaherCardProps {
  isLoading: boolean;
  isError: boolean;
  cityName: string;
  weatherCondition?: Condition;
  currentTemp?: Temperature;
  lowTemp?: Temperature;
  highTemp?: Temperature;
  timeZone?: string;
}

function CurrentWeaherCard({
  isLoading,
  isError,
  cityName,
  weatherCondition,
  currentTemp,
  lowTemp,
  highTemp,
  timeZone,
}: CurrentWeaherCardProps) {
  const { temperatureUnit } = useContext(UserPreferencesContext);

  // Hometown context managed by zustand
  const { hometown, setHometown } = useHometownStore();
  const isHometown = hometown === cityName;

  // Favorites context managed by redux
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(cityName);
  const handleFavoriteButtonClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(cityName));
    } else {
      dispatch(addToFavorites(cityName));
    }
  }

  return (
    <Card sx={{ width: '100%' }} elevation={5}>
      <FlexYBox sx={{ flexGrow: 1, padding: '16px' }}>

        {/* Header */}
        <FlexXBox p={2} justifyContent='space-between'>
          <Typography variant='h3'>{cityName}</Typography>
          <Box>
            {/* Hometown Icon Button */}
            <IconButton onClick={() => setHometown(isHometown ? undefined : cityName)}>
              {isHometown ? <HomeIcon fontSize='large' /> : <HomeOutlineIcon fontSize='large' />}
            </IconButton>

            {/* Favorite Icon Button */}
            <IconButton onClick={handleFavoriteButtonClick}>
              {isFavorite ? <StarIcon fontSize='large' /> : <StarOutlineIcon fontSize='large' />}
            </IconButton>
          </Box>
        </FlexXBox>

        {/* Content */}
        <FlexXBox justifyContent='center'>
          {isLoading && <CircularProgress />}
          {isError && <Typography>Error getting weather</Typography>}
        </FlexXBox>
        {weatherCondition && currentTemp && lowTemp && highTemp && timeZone && (
          <FlexXBox p={2} justifyContent='space-between' alignItems='center'>
            <WeatherCondition condition={weatherCondition} />

            {/* Tempuratures */}
            <FlexYBox alignItems='center'>
              <Typography variant='h5'>
                {getTempDisplay(currentTemp, temperatureUnit)}
              </Typography>
              <TempuratureRange
                lowTemp={lowTemp}
                highTemp={highTemp}
              />
            </FlexYBox>

            {/* Time */}
            <TimeDisplay timeZone={timeZone} />
          </FlexXBox>
        )}
      </FlexYBox>
    </Card>
  )
}

export default CurrentWeaherCard;
