import { Box, Typography, alpha } from '@mui/material';

import RatingStars from './RatingStars';

const TopMediaItem = ({ media }) => {
  const { name, episode, images, viewed, rating } = media;

  return (
    <Box position="relative" display="flex">
      <img
        src={images[1]}
        alt="poster"
        style={{
          width: '100%',
          aspectRatio: '2/3',
          objectFit: 'cover',
          borderRadius: 16,
        }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        borderRadius={4}
        bgcolor={alpha('#000', 0.5)}
      />
      <Box
        boxSizing="border-box"
        position="absolute"
        left={0}
        bottom={0}
        width="100%"
        p={2}
      >
        <Typography
          color="white"
          fontWeight={600}
          fontSize={18}
          align="center"
          sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
        >
          {name} - Ep {episode}
        </Typography>
        <Typography color="white" align="center">
          {viewed} views
        </Typography>
        <Box display="flex" justifyContent="center">
          <RatingStars rating={rating} />
        </Box>
      </Box>
    </Box>
  );
};

export default TopMediaItem;
