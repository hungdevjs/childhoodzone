import { Box } from '@mui/material';

import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box height="100vh" display="flex">
      <Sidebar />
      <Box p={3}>{children}</Box>
    </Box>
  );
};

export default Layout;
