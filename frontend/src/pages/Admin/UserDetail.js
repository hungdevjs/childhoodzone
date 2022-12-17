import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSnackbar } from 'notistack';

import Layout from '../../components/Layout';
import useAppContext from '../../hooks/useAppContext';
import { getById, update } from '../../services/user.service';

const userRoles = ['Admin', 'User', 'PremiumUser'];

const UserDetail = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const [user, setUser] = useState(null);

  const updateUserField = (field, value) =>
    setUser({
      ...user,
      [field]: value,
    });

  const updateUser = async () => {
    setIsLoading(true);

    try {
      const { _id, ...data } = user || {};
      await update(_id, data);
      navigate('/admin/users');
      enqueueSnackbar('Updated user successfully', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setIsLoading(false);
  };

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getById(id);
      setUser(res.data);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [id]);

  const { _id, username, role } = user || {};

  return (
    <Layout>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box p={2} display="flex" flexDirection="column" gap={2}>
              <Typography variant="h4">{_id}</Typography>
              <TextField
                key={_id}
                fullWidth
                variant="outlined"
                label="Username"
                placeholder="Username"
                value={username}
                onChange={(e) =>
                  updateUserField('username', e.target.value.trim())
                }
              />
              <FormControl fullWidth>
                <InputLabel id="user-role">Role</InputLabel>
                <Select
                  key={_id}
                  labelId="user-role"
                  value={role}
                  label="Role"
                  onChange={(e) => updateUserField('role', e.target.value)}
                >
                  {userRoles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {role}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box
          display="flex"
          gap={1}
          p={2}
          sx={{ borderTop: `1px solid ${grey[200]}` }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={updateUser}
          >
            <Typography fontSize={12} fontWeight={600}>
              Update
            </Typography>
          </Button>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => navigate('/admin/users')}
          >
            <Typography fontSize={12} fontWeight={600}>
              Cancel
            </Typography>
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default UserDetail;
