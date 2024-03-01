import { Link } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  title: string;   
}

function HeaderLink({
  to,
  title,
}: HeaderLinkProps) {
  const location = useLocation();
  const isCurrent = location.pathname === to;

  return (
    <Link
      variant='h6'
      component={RouterLink}
      to={to}
      underline={isCurrent ? 'always' : 'hover'}
    >
      {title}
    </Link>
  );
}

export default HeaderLink;
