import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    border: 1px solid;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    padding-left: 12px;
    width: 405px;
    height: 60px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #000000;
`
const PathTitles = styled.div`
    padding-left: 15px;
    width: 191px;
    height: 58px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #000000;
`
const Total = styled.div`
    margin:70px 30px;
    display: flex;
    
`

const CartHeader = ({numItems}) => {
  return (
    <Container>
        <Left>
            <Title>
                Cart
            </Title>
        </Left>
        <Total>
            {numItems} items in bag
        </Total>
    </Container>
  )
}

export default CartHeader