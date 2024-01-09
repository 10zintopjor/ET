import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import  {Link} from 'react-router-dom';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const SearchBarWithButton = () => {

  return (
    <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', padding: '0', border: '1px solid #ccc', maxWidth: '300px'}}>
      <TextField label="Search Products" variant="outlined" size="small" fullWidth style={{ border: 'none', flexGrow: 1 }} />
      <Divider orientation="vertical" flexItem />
      <Button variant="contained" style={{ border: 'none', backgroundColor: 'white', color: 'black' }}>
        Search
      </Button>
    </Paper>
  )
    
};

  
const CategoryContainer = () => {
  return (
      <Container maxWidth="md" style={{ marginTop: '20px', border: '2px solid black', padding: '0',marginBottom:'20px'}}>
      <List>
          <ListItem>
          <Link to="/allcategories" style={{ textDecoration: 'underline' }}>
            All Categories
          </Link>
          </ListItem>
        <ListItem>
          <Link to="/category1" style={{ textDecoration: 'underline' }}>
            Category 1
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/category2" style={{ textDecoration: 'underline' }}>
            Category 2
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/category3" style={{ textDecoration: 'underline' }}>
            Category 3
          </Link>
        </ListItem>
      </List>
    </Container>
  );
};


const Store = () => {
  return (
    <Container style={{ width: '25%', border: '2px solid black', marginRight: '20px', overflow: 'hidden'}}>
    <div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px', padding: '10px', marginLeft: '0px' }}>
        <span>Store</span>
      </div>
    <div>
    <SearchBarWithButton />
    <CategoryContainer />
    </div>
    </ div>
    </Container>
  );
};

export default Store;
