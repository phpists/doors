import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

import logoIcon from 'src/assets/icons/logo.png';
import logoBigIcon from 'src/assets/icons/logo-big.png';
import logoSmallIcon from 'src/assets/icons/logo-small.png';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  small?: boolean;
  big?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, small, big, sx, ...other }, ref) => {
    const theme = useTheme();
    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const handleGetLogoSize = () => {
      if (big) {
        return logoBigIcon;
      }
      if (small) {
        return logoSmallIcon;
      }
      return logoIcon;
    };

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          display: 'inline-flex',
          marginRight: 10,
          ...sx,
        }}
        {...other}
      >
        <img src={handleGetLogoSize()} alt="logo" />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
