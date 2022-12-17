import { Box } from '@mui/material';

import Layout from '../../components/Layout';
import Navs from './components/Navs';

const MediaDetail = () => {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Navs />
      </Box>
    </Layout>
  );
};

export default MediaDetail;
