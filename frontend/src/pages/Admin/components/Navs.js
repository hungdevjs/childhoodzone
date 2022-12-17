import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const navs = [
  { name: 'User list', url: '/admin/users' },
  { name: 'Media list', url: '/admin/medias' },
];

const Navs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) => pathname.includes(path);

  return (
    <Box display="flex">
      <Box
        display="flex"
        alignItems="center"
        borderRadius={2}
        overflow="hidden"
      >
        {navs.map((nav) => (
          <Box
            key={nav.name}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate(nav.url)}
            bgcolor={isActive(nav.url) ? 'primary.main' : grey[500]}
            color="white"
            py={1}
            px={2}
          >
            <Typography fontSize={12} fontWeight={600}>
              {nav.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Navs;
