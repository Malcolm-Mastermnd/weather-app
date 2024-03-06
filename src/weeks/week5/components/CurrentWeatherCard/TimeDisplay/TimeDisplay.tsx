import { Typography } from "@mui/material";
import { useEffect, useState } from 'react';

const ONE_SECOND = 1000;

interface TimeDisplayProps {
  timeZone?: string;
}

function TimeDisplay({
  timeZone,
}: TimeDisplayProps) {  
  const [timeDisplay, setTimeDisplay] = useState<string>();

  const setTime = () => {
    setTimeDisplay(new Date().toLocaleTimeString(
      'en-US',
      { timeZone, hour: 'numeric', minute: 'numeric', second: 'numeric'},
    ));
  }

  useEffect(() => {
    setTime();
    if (timeZone) {
      const intervalId = setInterval(() => setTime(), ONE_SECOND);
      return () => clearInterval(intervalId);
    }
  } , [timeZone]);

  return (
    <Typography variant='h5'>{timeDisplay}</Typography>
  )
}

export default TimeDisplay;
