import React, { useState } from 'react'
import styled from "styled-components"
import Rating from '@mui/material/Rating';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
const Container = styled.div`
    display: flex;
    padding: 20px;
    flex:1;
    margin: 30px;
   
`
const Image = styled.img`
    width: 140px;
    height: 173px;
    cursor: pointer;
    &:hover{
        color: #135dad;
        opacity: 0.5;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: column;

`
const Title = styled.div`
    width: 358px;
    height: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 16px;
    margin-top:20px;
    color: #000000;
    cursor: pointer;
    &:hover{
        color: #135dad;
        opacity: 0.5;
    }
`
const Price = styled.div`
    width: 269px;
    height: 54px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    align-items: center;
    color: #000000;
`
const handleClick = (productId) => {
    
}

const CategoryItem = ({item}) => {
    const [value, setValue] = useState(item.rating)
  return (
    <Container>
        <Link style = {{color: "#333",textDecoration:"none", display:"flex"}} to={`/product/${item.id}`}> <Image src={item.img}/></Link>
        <Info>
            <Link style = {{color: "#333",textDecoration:"none", display:"flex"}} to={`/product/${item.id}`}> <Title>{item.title}</Title></Link>
            <Price>{item.price} VND</Price>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    {item.rating = value}
                }}
            />
        </Info>
    </Container>
  )
}

export default CategoryItem