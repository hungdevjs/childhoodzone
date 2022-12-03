import { Box, CircularProgress, alpha } from '@mui/material';

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={alpha('#000', 0.6)}
      zIndex={20}
    >
      <CircularProgress color="info" />
    </Box>
  );
};

export default Loading;
