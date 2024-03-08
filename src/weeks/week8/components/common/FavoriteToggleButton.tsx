import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { IconButton, IconButtonProps, SvgIconProps } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../context/redux/globalStore';
import { addToFavorites, removeFromFavorites } from '../../context/redux/useFavoritesStore';
import { MouseEventHandler } from 'react';

interface FavoriteToggleButtonProps {
  cityName: string;
  iconButtonProps?: IconButtonProps;
  iconProps?: SvgIconProps;
}

function FavoriteToggleButton({
  cityName,
  iconButtonProps,
  iconProps,
}: FavoriteToggleButtonProps) {
  // Favorites context managed by redux
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(cityName);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(cityName));
    } else {
      dispatch(addToFavorites(cityName));
    }
  }

  return (
    <IconButton {...iconButtonProps} onClick={handleClick}>
      {isFavorite ? <StarIcon {...iconProps} /> : <StarOutlineIcon {...iconProps} />}
    </IconButton>
  )
}

export default FavoriteToggleButton;
