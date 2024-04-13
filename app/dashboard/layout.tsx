import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      className="dashboard-container"
      height={'100vh'}
      sx={{
        flexDirection: { mobile: 'column', tablet: 'row' },
        overflow: { mobile: 'hidden' },
      }}
    >
      <Box
        className="navbar-container"
        flex={'none'}
        sx={{
          width: { mobile: '100%', tablet: '16rem' },
          px: { mobile: 0, tablet: '0.5rem' },
        }}
      >
        <SideNav />
      </Box>
      <Box
        className="main-container"
        component={'main'}
        flexGrow={1}
        sx={{
          overflowY: { mobile: 'auto' },
          p: { mobile: '1.5rem', tablet: '3rem' },
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}
