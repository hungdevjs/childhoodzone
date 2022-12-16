import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

import Images from '../assets/Images';

const navigations = [
  {
    name: 'Menu',
    children: [
      { name: 'Home', path: '/', icon: HomeIcon },
      { name: 'Movies', path: '/movies', icon: MovieIcon },
      { name: 'Comics', path: '/comics', icon: LibraryBooksIcon },
      { name: 'Audios', path: '/audios', icon: AudioFileIcon },
      { name: 'Games', path: '/games', icon: VideogameAssetIcon },
    ],
  },
  {
    name: 'General',
    children: [
      { name: 'Profile', path: '/profile', icon: PersonIcon },
      {
        name: 'Admin panel',
        path: '/admin/users',
        icon: AdminPanelSettingsIcon,
      },
      { name: 'Log out', path: '/logout', icon: LogoutIcon },
    ],
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path || (path !== '/' && pathname.includes(path));

  return (
    <Box
      width="20vw"
      minWidth="300px"
      display="flex"
      flexDirection="column"
      gap={4}
      sx={{ borderRight: `1px solid ${grey[200]}` }}
    >
      <Box p={3} display="flex" alignItems="center" gap={2}>
        <img src={Images.logo} alt="logo" width={50} />
        <Typography
          fontSize={24}
          fontFamily="'Nerko One', cursive"
          color="error.main"
        >
          ChildhoodZone
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={4} pl={3}>
        {navigations.map((navigation) => (
          <Box
            key={navigation.name}
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Typography
              fontSize={14}
              fontWeight={600}
              textTransform="uppercase"
              color={grey[400]}
            >
              {navigation.name}
            </Typography>
            {navigation.children.map((child) => (
              <Box
                key={child.path}
                display="flex"
                justifyContent="space-between"
                py={1}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    '& .nav': {
                      opacity: 1,
                    },
                    '& p': {
                      fontWeight: 600,
                    },
                  },
                }}
                onClick={() => navigate(child.path)}
              >
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                  className="nav"
                  sx={{ opacity: isActive(child.path) ? 1 : 0.6 }}
                >
                  <child.icon
                    sx={{
                      fontSize: 24,
                      color: isActive(child.path) ? 'error.main' : grey[600],
                    }}
                  />
                  <Typography
                    fontSize={14}
                    fontWeight={isActive(child.path) ? 600 : 400}
                    color={isActive(child.path) ? 'error.main' : 'black'}
                  >
                    {child.name}
                  </Typography>
                </Box>
                <Box
                  width={4}
                  bgcolor="error.main"
                  sx={{ opacity: isActive(child.path) ? 1 : 0 }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
