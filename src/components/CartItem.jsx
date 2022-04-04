import React, { useState , useLayoutEffect} from 'react'
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
  justify-content: space-around;
  border: 1px solid black;
`
const Image = styled.img`
    flex: 0.5;
    padding: 20px;
    width: 180px;
    height: 200px;
    cursor: pointer;
    &:hover{
        color: #135dad;
        opacity: 0.5;
    }
`
const Info = styled.div`
  flex: 2;
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
const QuantityItem = styled.div`
    margin-right:50px;
    align-items: center;
    display: flex;
    justify-content: space-around;
`
const Button = styled.button`
    border: none;
    background-color: #fff;
    font-size: 30px;
    padding: 20px;
    cursor: pointer;
`
const Num = styled.div`
  width: 64px;
  height: 57px;
`
const CartItem = (props) => {
  const [items, setItems] = useState([])
  const [numShow, setNumShow] = useState(props.item.quantity)

  const cartAPI = "http://localhost:3000/cart"
  useLayoutEffect(() =>{
    fetch(cartAPI)
      .then(res => res.json())
        .then(post => {
          setItems(post)
        })
  }, [])
  const handleIncrease = (data, callback) => {
    var indexCart = -1
    for (var i = 0; i < items.length; i++) {
      if (data.id == items[i].id) {
        indexCart = i
        break
      }
    }
    data.quantity =  numShow +1
    setNumShow(numShow +1)
    var options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    fetch(`${cartAPI}/${indexCart + 1}`, options)
      .then((response) => response.json())
      .then(callback(data.price))
  }
  const handleReduce = (data, callback) => {
    if (numShow == 1){

    }
    else {
      var indexCart = -1
      for (var i = 0; i < items.length; i++) {
        if (data.id == items[i].id) {
          indexCart = i
          break
        }
      }
      data.quantity =  numShow -1
      setNumShow(numShow -1)
      var options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(`${cartAPI}/${indexCart + 1}`, options)
        .then((response) => response.json())
        .then(callback(data.price*-1))
    }
  }
  return (
    <Container>
      <Image src={props.item.img} />
      <Info>
        <Title>Điện thoại {props.item.title}</Title>
        <Description>{props.item.description}</Description>
        <Price>{props.item.price} VND</Price>
      </Info>
      <QuantityItem>
        <Button onClick={() => handleIncrease(props.item, props.callback)} class="Button">+</Button>
        <h2>{numShow}</h2>
        <Button onClick={() => handleReduce(props.item, props.callback)} class="Button">-</Button>
      </QuantityItem>
    </Container>
  )
}


export default CartItem