import WeekSelect from '../../components/WeekSelect/WeekSelect';
import AppHeader, { APP_HEADER_HEIGHT } from './components/AppHeader/AppHeader';
import { Box, ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeekSelect />
      <AppHeader />
      <Box
        sx={{
          height: `calc(100% - ${APP_HEADER_HEIGHT}px)`,
          padding: '5% 15%',
          flexGrow: 1,
          marginTop: `${APP_HEADER_HEIGHT}px`
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App
