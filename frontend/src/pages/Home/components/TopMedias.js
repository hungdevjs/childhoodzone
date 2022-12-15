import { alpha, Box, Grid, Button, Typography } from '@mui/material';

import TopMediaItem from './TopMediaItem';
import RatingStars from './RatingStars';

const TopMedias = ({ medias }) => {
  const { best, topViews, topRatings } = medias;

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box position="relative" height={350}>
        <img
          src={best.images[0]}
          alt="banner"
          style={{
            width: '100%',
            height: '100%',
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
          position="absolute"
          left={0}
          bottom={0}
          p={2}
          display="flex"
          flexDirection="column"
          gap={1}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            color="white"
            textTransform="uppercase"
            lineHeight="40px"
          >
            {best.name}
          </Typography>
          <Typography color="white" fontWeight={600}>
            {best.viewed} views
          </Typography>
          <RatingStars rating={best.rating} />
          <Button variant="contained" color="error" sx={{ borderRadius: 2 }}>
            <Typography color="white" fontWeight={600}>
              Watch
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontSize={14} fontWeight={600}>
          Best viewed
        </Typography>
        <Grid container spacing={2}>
          {topViews.map((media) => (
            <Grid key={media.id} item xs={3}>
              <TopMediaItem media={media} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontSize={14} fontWeight={600}>
          Best ratings
        </Typography>
        <Grid container spacing={2}>
          {topRatings.map((media) => (
            <Grid key={media.id} item xs={3}>
              <TopMediaItem media={media} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TopMedias;
