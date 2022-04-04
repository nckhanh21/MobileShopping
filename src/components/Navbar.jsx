import React from 'react'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@mui/material/Badge'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Product from '../pages/Product'
import HomePage from '../pages/Home'
import ProductList from '../pages/ProductList'

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
const Container = styled.div`
    position: absolute;
    width: 195px;
    height: 100%;
    margin-top: 119px;
    border: 1px solid #000000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;
const Toolbar = styled.div`
    position: absolute;
    width: 243px;
    height: 60px;
 
`
const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid;
`
const MenuText = styled.div`
    padding: 8px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    align-items: center;

    color: #000000;
`


const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    align-items: center;

    color: #000000;
`

const MenuIconGroup = styled.div`
    padding: 10px;
    align-items: center;
    width: 30px;
    height: 30px;
`
const Shop = styled.div`
    padding: 8px;
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

const Cart = styled.div`
    padding: 8px;
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

const Profile = styled.div`
    padding: 8px;
    margin-left: 15px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

const Navbar = () => {
    return (
        <React.Fragment>
            <Container>
                <Menu>
                    <MenuText>Menu</MenuText>
                    <MenuIconGroup><MenuIcon /> </MenuIconGroup>
                </Menu>
                <Shop>
                    <Link to="/homepage" style = {{color: "#333",textDecoration:"none", display:"flex"}}>
                        <StoreMallDirectoryIcon />
                        <Text>Shop</Text>
                    </Link>
                </Shop>
                <Cart >
                    <Link to="/cart" style = {{color: "#333",textDecoration:"none", display:"flex"}} >
                        <ShoppingCartIcon />
                        <Text>Cart</Text>
                    </Link>
                </Cart>
                <Profile>
                    <Link to='/profile' style = {{color: "#333",textDecoration:"none", display:"flex"}}>
                        <PersonIcon />
                        <Text>Profile</Text>
                    </Link>
                </Profile>
            </Container>


        </React.Fragment>
    )
}

export default Navbar