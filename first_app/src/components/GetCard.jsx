import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';


const GetCard = () => {
      var[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
        console.log(response.data)
        setProducts(response.data)
    })
    },[])
  return (
    <div>
        <Grid container spacing={2}>
 
        {products.map((val,i)=>{
            return(
                <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title={val.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
            )
        })}
        </Grid>
    </div>
  )
}

export default GetCard