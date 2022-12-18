import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  Box,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';

import useAppContext from '../../hooks/useAppContext';
import { get, remove } from '../../services/media.service';
import Layout from '../../components/Layout';
import Navs from './components/Navs';

const MediaList = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [removingMedia, setRemovingMedia] = useState(null);
  const [medias, setMedias] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await get();
      setMedias(res.data);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setIsLoading(false);
  };

  const removeMedia = async (id) => {
    setIsLoading(true);

    try {
      await remove(id);
      await getData();
      enqueueSnackbar('Removed media successfully', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setRemovingMedia(null);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Dialog open={!!removingMedia} onClose={() => setRemovingMedia(null)}>
        <Box p={2} display="flex" flexDirection="column" gap={2}>
          <Typography>
            Do you want to remove media {removingMedia?.username}?
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap={1}
          >
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => removeMedia(removingMedia._id)}
            >
              <Typography fontSize={10}>Remove</Typography>
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setRemovingMedia(null)}
            >
              <Typography fontSize={10}>Cancel</Typography>
            </Button>
          </Box>
        </Box>
      </Dialog>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Navs />
        <Typography variant="h5">Media list</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ alignSelf: 'flex-start' }}
          onClick={() => navigate('/admin/medias/create')}
        >
          Create media
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight={600}>Id</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight={600}>Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600}>Episode</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight={600}>Type</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600}>Is Premium</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight={600}>Created at</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight={600}>Actions</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medias.length ? (
                medias.map((media) => (
                  <TableRow
                    key={media._id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="media">
                      {media._id}
                    </TableCell>
                    <TableCell align="left">{media.name}</TableCell>
                    <TableCell align="center">{media.episode}</TableCell>
                    <TableCell align="left">{media.type}</TableCell>
                    <TableCell align="center">
                      {media.isPremium ? (
                        <CheckIcon sx={{ color: 'success.main' }} />
                      ) : (
                        <CloseIcon sx={{ color: 'error.main' }} />
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {moment(new Date(media.createdAt)).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell align="right">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        gap={1}
                      >
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => navigate(`/admin/medias/${media._id}`)}
                        >
                          <Typography fontSize={10}>Edit</Typography>
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={() => setRemovingMedia(media)}
                        >
                          <Typography fontSize={10}>Remove</Typography>
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography align="center">No medias.</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default MediaList;
