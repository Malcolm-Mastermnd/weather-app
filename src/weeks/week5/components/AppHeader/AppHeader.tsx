import { AppBar, Toolbar } from '@mui/material';
import FlexXBox from '../common/FlexXBox';
import HeaderLink from './HeaderLink/HeaderLink';

export const APP_HEADER_HEIGHT = 64;

function AppHeader() {
  return (
    <AppBar sx={{ height: `${APP_HEADER_HEIGHT}px` }} position='fixed'>
      <Toolbar>
        <FlexXBox flexGrow={1} justifyContent='center' padding={3}>
          <FlexXBox gap={4}>
            <HeaderLink to='/week5/search' title='Search' />
            <HeaderLink to='/week5/hometown' title='My Hometown' />
            <HeaderLink to='/week5/favorites' title='My Favorites' />
          </FlexXBox>
        </FlexXBox>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
