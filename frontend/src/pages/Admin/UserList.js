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
import moment from 'moment';

import useAppContext from '../../hooks/useAppContext';
import { get, remove } from '../../services/user.service';
import Layout from '../../components/Layout';

const UserList = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [removingUser, setRemovingUser] = useState(null);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await get();
      setUsers(res.data);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setIsLoading(false);
  };

  const removeUser = async (id) => {
    setIsLoading(true);

    try {
      await remove(id);
      await getData();
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setRemovingUser(null);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Dialog open={!!removingUser} onClose={() => setRemovingUser(null)}>
        <Box p={2} display="flex" flexDirection="column" gap={2}>
          <Typography>
            Do you want to remove user {removingUser?.username}?
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
              onClick={() => removeUser(removingUser._id)}
            >
              <Typography fontSize={10}>Remove</Typography>
            </Button>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => setRemovingUser(null)}
            >
              <Typography fontSize={10}>Cancel</Typography>
            </Button>
          </Box>
        </Box>
      </Dialog>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Typography variant="h5">User list</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight={600}>Id</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight={600}>Username</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography fontWeight={600}>Role</Typography>
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
              {users.length ? (
                users.map((user) => (
                  <TableRow
                    key={user._id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="user">
                      {user._id}
                    </TableCell>
                    <TableCell align="left">{user.username}</TableCell>
                    <TableCell align="left">{user.role}</TableCell>
                    <TableCell align="left">
                      {moment(new Date(user.createdAt)).format('DD/MM/YYYY')}
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
                          onClick={() => navigate(`/admin/users/${user._id}`)}
                        >
                          <Typography fontSize={10}>Edit</Typography>
                        </Button>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={() => setRemovingUser(user)}
                        >
                          <Typography fontSize={10}>Remove</Typography>
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Typography align="center">No users.</Typography>
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

export default UserList;
