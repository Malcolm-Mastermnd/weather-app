import HomeIcon from '@mui/icons-material/Home';
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import { IconButton, IconButtonProps, SvgIconProps } from "@mui/material";
import { useHometownStore } from '../../context/zustand/UseHometown';
import { MouseEventHandler } from 'react';

interface HometownToggleButtonProps {
  cityName: string;
  iconButtonProps?: IconButtonProps;
  iconProps?: SvgIconProps;
}

function HometownToggleButton({
  cityName,
  iconButtonProps,
  iconProps,
}: HometownToggleButtonProps) {
  // Hometown context managed by zustand
  const { hometown, setHometown } = useHometownStore();
  const isHometown = hometown === cityName;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setHometown(isHometown ? undefined : cityName);
  }

  return (
    <IconButton {...iconButtonProps} onClick={handleClick}>
      {isHometown ? <HomeIcon {...iconProps} /> : <HomeOutlineIcon {...iconProps} />}
    </IconButton>
  )
}

export default HometownToggleButton;
