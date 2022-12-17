import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSnackbar } from 'notistack';

import Layout from '../../components/Layout';
import TopMedias from './components/TopMedias';
import { getTopMedias } from '../../services/media.service';
import useAppContext from '../../hooks/useAppContext';

const mediaTypes = ['Movies', 'Comics', 'Audios'];

const item = {
  id: '123123',
  createdAt: Date.now(),
  name: 'Jumanji',
  description:
    "Jumanji is a 1995 American fantasy adventure film directed by Joe Johnston from a screenplay by Jonathan Hensleigh, Greg Taylor, and Jim Strain. Loosely based on Chris Van Allsburg's picture book of the same name, the film is the first installment of the Jumanji franchise. It stars Robin Williams, Kirsten Dunst, David Alan Grier, Bonnie Hunt, Jonathan Hyde, and Bebe Neuwirth",
  url: '',
  type: 'Movie',
  images: [
    'https://hbomax-images.warnermediacdn.com/images/GYWpjDAgtkQi6kwEAAACI/tileburnedin?size=1280x720&partner=hbomaxcom&v=d5331cd8e3bc01d2b2f5e40c0ac633b4&host=art-gallery.api.hbo.com&language=en-us&w=1280',
    'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
  ],
  viewed: 100,
  rating: 4,
  isPremium: false,
};

const mockData = {
  best: item,
  topViews: Array(4).fill(item),
  topRatings: Array(4).fill(item),
};

const Home = () => {
  const {
    loadingState: { setIsLoading },
  } = useAppContext();
  const { enqueueSnackbar } = useSnackbar();
  const [tab, setTab] = useState(0);
  const [allTopMedias, setAllTopMedias] = useState({
    movies: null,
    comics: null,
    audios: null,
  });

  const { movies, comics, audios } = allTopMedias;

  const topMedias = tab === 0 ? movies : tab === 1 ? comics : audios;

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getTopMedias();
      setAllTopMedias(res.data);
    } catch (err) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <Box display="flex" flexDirection="column" gap={2} p={2}>
        <Box display="flex" alignItems="center" gap={2}>
          {mediaTypes.map((type, index) => (
            <Typography
              key={type}
              fontWeight={600}
              fontSize={14}
              color={index === tab ? 'black' : grey[500]}
              onClick={() => setTab(index)}
              sx={{ cursor: 'pointer' }}
            >
              {type}
            </Typography>
          ))}
        </Box>
        {topMedias && (
          <Box>
            <TopMedias medias={topMedias} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
