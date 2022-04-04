import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import styled from "styled-components"
import BodyHeader from './BodyHeader'
import CategoryItem from './CategoryItem'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Rating from '@mui/material/Rating';


const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin:119px 0px 0px 195px;
  width: 88%;
`
const ProductContent = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
`
const Image = styled.img`
    width: 408px;
    height: 478px;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  width: 497px;
  height: 48px;
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
`

const Description = styled.p`
  width: 760px;
  height: 155px;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
`
const Price = styled.h1`

`
const ButtonDiv = styled.div`
`
const ButtonAddToCart = styled.button`
  margin: 30px;
  width: 300px;
  height: 100px;
  background: #00FF19;
  border-radius: 10px;
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  color: #FFFDFD;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`
const ButtonBuy = styled.button`
  margin: 30px;
  width: 300px;
  height: 100px;
  background: #00C2FF;
  border-radius: 10px;
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  color: #FFFDFD;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
  }
`

const ProductDetail = () => {
  const [value, setValue] = useState(0)
  const [item, setItem] = useState({})
  const [items, setItems] = useState([])
  const location = useLocation()
  const a = location.pathname
  let spliturl = a.split("/")
  const productId = parseInt(spliturl[spliturl.length - 1])
  const productAPI =`http://localhost:3000/productList/${productId}`
  const cartAPI = "http://localhost:3000/cart"
  
 
  //loadAPI cart
  useLayoutEffect(() =>{
    fetch(cartAPI)
      .then(res => res.json())
        .then(post => {
          setItems(post)
        })
  }, [])
  //load api product
  useLayoutEffect(() =>{
    fetch(productAPI)
      .then(res => res.json())
        .then(post => {
          setItem(post)
          setValue(3)
        })
  }, [])

const handleAddToCart = (data, callback) => {
  var indexCart = -1
  for(var i=0; i<items.length; i++) {
    if (data.id == items[i].id) {
      indexCart = i
      break
    }
  }
 
  if (indexCart != -1){
    data.quantity = items[indexCart].quantity +1
    var options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(`${cartAPI}/${indexCart+1}`, options)
      .then((response) =>response.json())
        .then(callback)
  }
  else{
    data.quantity = 1
    var options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(cartAPI, options)
      .then((response) =>response.json())
        .then(callback)
  }
}

  return (
    <Container>
      <BodyHeader />
      <ProductContent>
        <Image src={item.img} />
        <Info>
          <Title>Điện thoại {item.title}</Title>
          <Description>{item.description}</Description>
          <Price>{item.price} VND</Price>
          <Rating
            style = {{marginTop: "40px", maxWidth: "150px"}}
            size="large"
            name="simple-controlled"
            value={item.rating}
            onChange={(event, newValue) => {
              setValue(item.rating);
            }}
          />
        <ButtonDiv>
          <ButtonBuy>Mua Ngay </ButtonBuy>      
          <a href={'/cart'}><ButtonAddToCart onClick={() => handleAddToCart(item)}>Thêm vào rỏ hàng</ButtonAddToCart>  </a>
        </ButtonDiv>       
        </Info>
      </ProductContent>
    </Container>
  )
}

export default ProductDetail