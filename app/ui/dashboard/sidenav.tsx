import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <Stack
      className="navbar"
      py={'1rem'}
      sx={{
        height: { mobile: 'auto', tablet: '100vh' },
        px: { mobile: '0.75rem', tablet: '0' },
      }}
    >
      <Link className="link-to-home" href="/">
        <Box
          className="brand-container"
          display={'flex'}
          alignItems={'flex-end'}
          justifyContent={'flex-start'}
          borderRadius={'0.375rem'}
          p={'1rem'}
          mb={'0.5rem'}
          sx={{
            backgroundColor: 'rgb(47 111 235)',
            height: { mobile: '5rem', tablet: '10rem' },
          }}
        >
          <Box
            className="logo-container"
            color={'white'}
            sx={{
              width: { mobile: '8rem', tablet: '10rem' },
            }}
          >
            <AcmeLogo />
          </Box>
        </Box>
      </Link>
      <Box
        className="navbar-actions-container"
        display={'flex'}
        justifyContent={'space-between'}
        flexGrow={1}
        gap={'0.5rem'}
        sx={{
          flexDirection: { mobile: 'row', tablet: 'column' },
        }}
      >
        <NavLinks />
        <Box
          className="navlinks-signout-divider"
          flexGrow={1}
          borderRadius={'0.375rem'}
          height={'auto'}
          width={'100%'}
          sx={{
            backgroundColor: 'rgb(249 250 251)',
            display: { mobile: 'none', tablet: 'block' },
          }}
        />
        <Box
          className="signout-button-container"
          sx={{
            display: { mobile: 'none', tablet: 'block' },
            backgroundColor: 'rgb(249 250 251)',
            '&:hover': {
              backgroundColor: 'rgb(224 242 254)',
            },
          }}
        >
          <Button variant="text" startIcon={<LogoutIcon />} fullWidth>
            <Typography fontSize={'0.875rem'}>Sign Out</Typography>
          </Button>
        </Box>
        <Box
          className="signout-icon-button-container-mobile-only"
          sx={{
            display: { mobile: 'flex', tablet: 'none' },
            alignItems: 'center',
            backgroundColor: 'rgb(249 250 251)',
            '&:hover': {
              backgroundColor: 'rgb(224 242 254)',
            },
          }}
        >
          <IconButton color="inherit" aria-label="sign out">
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
}
