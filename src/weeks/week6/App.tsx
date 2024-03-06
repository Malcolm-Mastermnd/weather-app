import WeekSelect from '../../components/WeekSelect/WeekSelect';
import AppHeader, { APP_HEADER_HEIGHT } from './components/AppHeader/AppHeader';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { Outlet } from 'react-router-dom';
import { UserPreferencesProvider } from './context/react-context/UserPreferencesContext';
import FlexYBox from './components/common/FlexYBox';
import { Provider } from 'react-redux';
import { reduxGlobalStore } from './context/redux/globalStore';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserPreferencesProvider>
        <Provider store={reduxGlobalStore}>
          <WeekSelect />
          <AppHeader />
          <FlexYBox
            sx={{
              minHeight: `calc(100vh - ${APP_HEADER_HEIGHT}px)`,
              padding: '5% 15%',
              flexGrow: 1,
              marginTop: `${APP_HEADER_HEIGHT}px`,
              boxSizing: 'border-box',
            }}
          >
            <Outlet />
          </FlexYBox>
        </Provider>
      </UserPreferencesProvider>
    </ThemeProvider>
  );
}

export default App
