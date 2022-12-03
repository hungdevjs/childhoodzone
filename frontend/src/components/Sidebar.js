import { Box, Typography } from '@mui/material';
import { indigo, grey } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

import Images from '../assets/Images';

const navigations = [
  {
    name: 'Menu',
    children: [
      { name: 'Home', path: '/', icon: HomeIcon },
      { name: 'Movies', path: '/movies', icon: MovieIcon },
      { name: 'Comics', path: '/comics', icon: LibraryBooksIcon },
      { name: 'Games', path: '/games', icon: VideogameAssetIcon },
    ],
  },
];

const Sidebar = () => {
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
        <Typography fontSize={24} fontFamily="'Nerko One', cursive">
          ChildhoodZone
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={2} pl={3}>
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
                    '& .active': {
                      opacity: 1,
                    },
                    '& p': {
                      fontWeight: 600,
                    },
                  },
                }}
              >
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                  className="nav"
                  sx={{ opacity: 0.6 }}
                >
                  <child.icon sx={{ fontSize: 24, color: grey[600] }} />
                  <Typography fontSize={14}>{child.name}</Typography>
                </Box>
                <Box
                  className="active"
                  width={4}
                  bgcolor={indigo[600]}
                  sx={{ opacity: 0 }}
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
