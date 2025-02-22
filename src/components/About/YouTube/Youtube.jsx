import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


/**
 * This component is in Material UI 
 * I've copied and later i've pasted 
 * and i've changed some things
 */
const data = [
  {
    src: 'https://i.ytimg.com/vi/8ugaeA-nMTc/hqdefault.jpg',
    title: 'Top 10 Greatest Movies of All Time 🎬',
    channel: 'Cinephile Hub',
    views: '2.5M views',
    createdAt: '1 month ago',
    link: 'https://www.youtube.com/watch?v=8ugaeA-nMTc',
  },
  {
    src: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg',
    title: 'Marvel Cinematic Universe: Full Timeline Explained 🦸‍♂️',
    channel: 'MovieVerse Explained',
    views: '10M views',
    createdAt: '6 months ago',
    link: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
  },
  {
    src: 'https://i.ytimg.com/vi/EXeTwQWrcwY/hqdefault.jpg',
    title: 'The Dark Knight - Why It’s a Masterpiece 🃏',
    channel: 'Film Analysis',
    views: '5.2M views',
    createdAt: '2 weeks ago',
    link: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
  },
  {
    src: 'https://i.ytimg.com/vi/YoHD9XEInc0/hqdefault.jpg',
    title: 'Inception - A Dream Within a Dream 🤯',
    channel: 'Mind Bender Cinema',
    views: '3.8M views',
    createdAt: '4 months ago',
    link: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
  },
  {
    src: 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
    title: 'Pixar’s Best Animated Films - Ranked! 🎥',
    channel: 'Animation Nation',
    views: '1.2M views',
    createdAt: '1 year ago',
    link: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
  },
  {
    src: 'https://i.ytimg.com/vi/5PSNL1qE6VY/hqdefault.jpg',
    title: 'Avatar - The Visual Revolution 🌎',
    channel: 'Sci-Fi Central',
    views: '7M views',
    createdAt: '3 years ago',
    link: 'https://www.youtube.com/watch?v=5PSNL1qE6VY',
  },
  {
    src: 'https://i.ytimg.com/vi/JfVOs4VSpmA/hqdefault.jpg',
    title: 'Spider-Man: No Way Home - Full Breakdown 🕷️',
    channel: 'Superhero Central',
    views: '9.5M views',
    createdAt: '5 months ago',
    link: 'https://www.youtube.com/watch?v=JfVOs4VSpmA',
  }
];

const MediaItem = ({ item, loading }) => (
  <Card
    sx={{ 
      width: 220, 
      m: 1, 
      boxShadow: 3, 
      transition: 'transform 0.3s ease-in-out',
      '&:hover': { transform: 'scale(1.05)' },
      cursor: 'pointer'
    }}
    onClick={() => window.open(item.link, '_blank')}
  >
    {loading ? (
      <Skeleton variant="rectangular" height={120} />
    ) : (
      <CardMedia component="img" height="120" image={item.src} alt={item.title} />
    )}
    <CardContent>
      {loading ? (
        <>
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </>
      ) : (
        <>
          <Typography variant="body2" fontWeight="bold">
            {item.title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {item.channel}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {`${item.views} • ${item.createdAt}`}
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

MediaItem.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
};

export default function YouTube() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Box sx={{ overflowX: 'auto', p: 2 }}>
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <MediaItem key={index} item={item} loading={loading} />
        ))}
      </Grid>
    </Box>
  );
}
