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
    width: 100%;
    height: 130px;
    border: 1px solid;
`
const Pad = styled.div`
    margin-right: 100px;
    display: flex;
    justify-content: right;
`
const Content = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`

`
const Num = styled.h3`
    padding: 4px;
`

const TotalMoney = (props) => {

  return (
    <Container>
        <Pad>
        <Content>
            <Title>SubTotal</Title>
            <Title>Tax</Title>
            <Title>Total</Title>
        </Content>
        <Content>
            <Num>{props.sum}</Num>
            <Num>Tax</Num>
            <Num>Total</Num>
        </Content>
        </Pad>
    </Container>
  )
}

export default TotalMoney