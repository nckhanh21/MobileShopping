import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Container = styled.div`
`
const ProductList = () => {
  return (
    <Container>
        <Header/>
        <Navbar/>
    </Container>
  )
}

export default ProductList