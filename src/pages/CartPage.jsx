import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import styled from "styled-components"
import BodyHeader from '../components/BodyHeader'
import Cart from '../components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from '../components/ProductDetail'

const BodyPage = styled.div`
  display: flex;
  
`
const Slide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const CartPage = () => {
  return (
    <div>
      <Header />
      <BodyPage>
        <Navbar />
        <Slide>
            <Cart/>
        </Slide>
      </BodyPage>
    </div>
  )
}

export default CartPage