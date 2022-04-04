import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import styled from "styled-components"
import {Items} from '../data'
import CategoryItem from './CategoryItem'
import CartHeader from './CartHeader'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import CartItem from './CartItem'
import TotalMoney from './TotalMoney'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin:119px 0px 0px 195px;
  width: 88%;
`
const ItemsContainer = styled.div`
    
`

const Cart = (props) => {
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  const productAPI ="http://localhost:3000/Cart"
  useEffect(() =>{
    fetch(productAPI)
      .then(res => res.json())
        .then(post => {
          setItems(post)
          setTotal(post.reduce((prevValue, currentValue) => (prevValue + currentValue.price*currentValue.quantity),0))
        })
  },[])

  console.log(total);
  return (
    <Container>
          <CartHeader  numItems = {items.length}/>
          {items.map(item => (
              <CartItem 
                key={item.id} 
                item = {item} 
                callback={(data) => (setTotal(total+data))}
                />
            ))}
          <TotalMoney sum={total}/>
    </Container>
  )
}

export default Cart