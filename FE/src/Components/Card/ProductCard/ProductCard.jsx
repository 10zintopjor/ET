import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCard = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageStyle = {
    height: '200px', // Set your desired fixed height
    width: '100%',   // Set the width to 100% to ensure responsiveness
    objectFit: 'cover',
  };

  return (
    <Card sx={{ maxWidth: 300, width: '100%', margin: '15px 15px 15px 15px', maxHeight: '400px' }}>
      <Slider {...settings}>
        {props.data.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Product Image ${index + 1}`}
              style={imageStyle}
            />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${props.data.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Button size="medium" style={{ backgroundColor: '#f1f0f0', color: 'black', border: '1px solid black' }}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
