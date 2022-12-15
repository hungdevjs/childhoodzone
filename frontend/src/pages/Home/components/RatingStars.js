import { Box } from '@mui/material';
import { yellow, grey } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';

const RatingStars = ({ rating }) => {
  return (
    <Box display="flex" alignItems="center" gap={0.5}>
      {Array(5)
        .fill('')
        .map((_, index) => (
          <StarIcon
            fontSize="small"
            sx={{ color: index + 1 <= rating ? yellow[500] : grey[500] }}
          />
        ))}
    </Box>
  );
};

export default RatingStars;
