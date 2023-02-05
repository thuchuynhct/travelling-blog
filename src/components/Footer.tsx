import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logo } from '../assets'
import { Brand, Logo, LogoImage, NavLinkType } from './Header'

const StyledFooter = styled.footer`   
    padding: clamp(20px,5vw,50px) 0 20px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen}; 
    >*+*{
        margin-top: 50px ;
    }  
`
const FooterInfo = styled.div`
    display: flex;
    justify-content: center;
    column-gap: clamp(50px,13vw,125px);
    @media screen and (max-width:${props => props.theme.screens.lg}){
        flex-direction: column;
        align-items: center;
        row-gap: clamp(20px,5vw,50px);
        text-align: center;
    }
`
const FooterLinks = styled.ul`
    >*+*{
        margin-top: 23px;
    }
`
const FooterForm = styled.form`
    max-width: 350px;
    >*+*{
        margin-top: 28px;
    }
`
const InputField = styled.input`
    width: 100%;
    padding: 10px;
    color: #333;
    background-color: ${props => props.theme.colors.white};
`
export const StyledButton = styled.button`
    min-width: 80px;
    margin-left:auto;
    padding: 1.4rem 2.9rem;
    font-size: ${props => props.theme.fontSize.md};
    background-color: ${props => props.theme.colors.copper};
    @media screen and (max-width:${props => props.theme.screens.lg}){
       width: 100%;
    }
`
const Author = styled.span`
    font-size: ${props => props.theme.fontSize.base};
    font-weight: 500;
    text-align: center;
`
const Footer = (props: { footerMenu: NavLinkType[] }) => {
    const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Thank for subscribe!")
    }
    return (
        <StyledFooter>
            <FooterInfo>
                <Logo to="">
                    <LogoImage src={logo} alt="On the trail" />
                    <Brand>
                        On the Trail
                        <span>My Travel Blog</span>
                    </Brand>
                </Logo>
                <FooterLinks>
                    {
                        props.footerMenu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.display}</Link>
                            </li>
                        ))
                    }
                </FooterLinks>
                <FooterForm onSubmit={submitHandle}>
                    <p>Subscribe here and get the latest travel tips  and my insider secrets!</p>
                    <InputField type="email" required placeholder='Email...' />
                    <StyledButton type='submit'>
                        Subscribe
                    </StyledButton>
                </FooterForm>
            </FooterInfo>
            <Author>©2023 Powered and secured by Thuc Huynh</Author>
        </StyledFooter>
    )
}

export default Footer