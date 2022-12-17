import { Box } from '@mui/material';

import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box height="100vh" display="flex">
      <Sidebar />
      <Box flex={1} display="flex" flexDirection="column" overflow="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
