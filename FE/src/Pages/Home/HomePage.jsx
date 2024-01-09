import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import ProductCard from "../../Components/Card/ProductCard/ProductCard"
import Store from "../../Components/Box/Store"

const HomePage = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        window.scroll(0, 0);
        const response = await axios.get("/api/getrandomproducts");
        setBannerData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '80%', display: 'flex' }}>
      <Store />
        <Container
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            overflowX: 'auto',
            overflowY: 'hidden',
            border: '2px solid black',
            width: '80%',
            padding: '10px', // Adjust the padding value as needed
          }}
        >
          {bannerData.map((data, i) => (
            <ProductCard key={i} data={data} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
