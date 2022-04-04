import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import styled from "styled-components"
import {Items} from '../data'
import CategoryItem from './CategoryItem'
import BodyHeader from './BodyHeader'
import React, { useState, useEffect, useLayoutEffect } from 'react'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin:119px 0px 0px 195px;
  width: 88%;
`
const ItemsContainer = styled.div`
    
`

const Categories = () => {
  const [items, setItems] = useState([])
  const productAPI ="http://localhost:3000/productList"

  useLayoutEffect(() =>{
    fetch(productAPI)
      .then(res => res.json())
        .then(post => {
          setItems(post)
        })
  }, [])

  return (
    <Container>
          <BodyHeader/>
            {items.map(item => (
              <CategoryItem item = {item} />
            ))}
    </Container>
  )
}

export default Categories