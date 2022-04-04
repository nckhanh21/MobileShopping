import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 119px;
  background: #C6E5F4;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
`
const Right = styled.div`

`
const Logo1 = styled.img`
  padding: 10px 28px 23px 37px;
    width: 98px;
    height: 86px;
`
const LogoDes= styled.div`
    padding: 30px 0px 23px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    display: flex;
    align-items: center;

    color: #000000;
`
const Avatar = styled.img`
  padding: 27px 25px 23px;
  width: 69px;
  height: 69px;
  border-radius: 50%;
`
const Header = () => {
  return (
    <Container>
      <Left>
        <Logo1 src="https://s3-alpha-sig.figma.com/img/b6e8/93c4/d34c78218f2e618bae4d316ce9b46881?Expires=1649635200&Signature=a7K8l1Dg70yudwFcnhu9n~0UB5fGBPxnpEw4Yf3YnrQNHYouisj-ANsi9~focksdzerFOOtn0eni6oRs1F4DqzpGyU8jL-qhLQ7I9GUkVTEb9yka3J35du43lWTM2Tko8j~M1kgG2YTKkb8aiWtioYKLfhuGgqU18zqo31mYkE4LazQpTbhQsMBFOZxRtF5nXm-QFAXWsmt3ShsF1UtyTE3V8Dg3B8tE4kcwuyRwnZzuD5cdSNfgM6HwHh9cbJzQZyYirXvvgOUgbHbRMQdVb7JqASsKYkzQKqnZ-JrWcIxqFC4-5rIONPcktwZtOtS4587BvAVHgoK0zcdSaxiA7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        <LogoDes>Mobile Shopping</LogoDes>
      </Left>
      <Right>
        <Avatar src="https://s3-alpha-sig.figma.com/img/fa77/2ed1/10e7ea98f927884bc61c118fc3fd77a8?Expires=1649635200&Signature=OgctVG3Hc7DmmBhp2ULbebllz0yNYjqtwz-z9TDfZ~ItFTLyDXlTN8PVVsoilVohhV3AAtcelT7K3ymdOJGa1eaW6i4z6M7h4z364PjrnTvLKN1R9FmRSGHAFjm1bFM1fMScwWefgynUt0TnJAW9F3vyzu60e7b1LH-Q7r39waoVwqp0zbyCZLd2cp26vXQQ1l7u3sC-l-enzNxjEsoAiKZJC87L2pox5ybtxyBpprtzfu~kDslOb68POFYH-jDNcJWBNRktm-V3Nlw82y-lxpYj6fATa4WZsNpY1YgkR7a5dKobzxm57UwbtpN6zZC29Egna48aKoKOd8s4nJlMEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
       </Right>
    </Container>
  )
}

export default Header