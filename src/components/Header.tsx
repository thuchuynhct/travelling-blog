import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { TfiSearch } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { articles, ArticleType } from '../data/article';
import Socials from './Socials';

export type NavLinkType = {
    display: string,
    path: string
}
const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 ${props => props.theme.space.padPage};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkGreen};
    z-index: 99;
    user-select: none;
    @media screen  and (max-width:${props => props.theme.screens.tablet}){
        height: ${props => props.theme.space.headerMobileHeight};
        + *{
        margin-top: ${props => props.theme.space.headerMobileHeight};
    }
    }

    @media screen  and (min-width:${props => props.theme.screens.tablet}){
        height: ${props => props.theme.space.headerHeight};
        + * {
        margin-top: ${props => props.theme.space.headerHeight};
        }
    }
`
export const Logo = styled(Link)`
    display: flex;
    place-items: center;
    gap: 1rem;
`
export const LogoImage = styled.img`
    width: 5rem;
    height: 5rem;
`
export const Brand = styled.span`
    color: ${props => props.theme.colors.creamYellow};
    font-family: ${props => props.theme.fonts.playFair};
    font-size: ${props => props.theme.fontSize.xl};
    font-weight: 500;
    span{
        margin-top: 5px;
        font-family: ${props => props.theme.fonts.raleway};
        font-size: ${props => props.theme.fontSize.base};
        letter-spacing: 2.4px;
    }
`
const Search = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 300px;
    padding: 10px 14px;
    outline:1px solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
   
    @media screen  and (max-width:${props => props.theme.screens.tablet}){
        order: 4;
        width: 100%;
    }
    >*:first-child{
        flex-grow: 1;
    }
    svg{
        font-size: 1.5rem;
        cursor: pointer;
    }
`
const SearchResult = styled.div`
    position: absolute;
    width: calc(100% + 2px);
    top: 100%;
    left: -1px;
    padding: 20px;
    background-color: ${props => props.theme.colors.darkGreen};
    border:1px solid ${props => props.theme.colors.white};
    border-top: none;
    >*+*{
        margin-top: 10px;
    }
`
const ResultPost = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        max-width:80px;
        aspect-ratio: 16/9;
    }
    h3{
        font-size: ${props => props.theme.fontSize.min};
        font-weight: 400;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`
const StyledNav = styled.nav<{ show: boolean }>`
    @media screen and (max-width:${props => props.theme.screens.lg}){
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: calc(100vh - ${props => props.theme.space.headerHeight});
        background-color: inherit;
        ${props => !props.show && css`transform:translateX(-100%);`}
        transition: all 300ms ease;
    }
`
const NavList = styled.ul`
    display: flex;
    @media screen  and (max-width:${props => props.theme.screens.lg}){
        align-items: center;
        flex-direction: column;
        row-gap : 50px;
        padding: 10px 0 30px;    
    }
`
const NavLink = styled.li`
    padding: 0 15px;
    cursor: pointer;
    &:hover{
        color: ${props => props.theme.colors.creamYellow};
    }
`
const Menu = styled.button`
    @media screen  and (min-width:${props => props.theme.screens.lg}){
       display: none;
    }
`
const Header = (props: { links: NavLinkType[] }) => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [search, setSearch] = useState<string>("");
    const [searchPost, setSearchPost] = useState<ArticleType[]>([])

    const inputChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();
        setSearch(searchValue)
    }

    useEffect(() => {
        if (search) {
            const posts = articles.filter(post => post.title.toLowerCase().includes(search));
            setSearchPost(posts)
        }
    }, [search])
    return (
        <StyledHeader>
            <Socials />
            <Logo to='/'>
                <LogoImage src={logo} alt="On the trail" />
                <Brand>
                    On the Trail
                    <span>My Travel Blog</span>
                </Brand>
            </Logo>
            <Search>
                <input type="text" placeholder='Seacrch...' onChange={inputChangeHandle} value={search} />
                {search ? <IoMdClose size={20} onClick={() => setSearch("")} /> : <TfiSearch />}
                {search && (
                    <SearchResult>
                        <p>Blog Post</p>
                        {searchPost.map(post => (
                            <ResultPost key={post.id} to={`/read/${post.id}`} onClick={() => setSearch("")}>
                                <img src={post.image} alt="" />
                                <h3>{post.title}</h3>
                            </ResultPost>
                        ))}
                    </SearchResult>
                )}
            </Search>
            <StyledNav show={menuToggle}>
                <NavList>
                    {
                        props.links.map((link, index) => (
                            <NavLink key={index}>
                                <Link to={link.path} onClick={() => setMenuToggle(false)}>
                                    {link.display}
                                </Link>
                            </NavLink>
                        ))
                    }
                </NavList>
            </StyledNav>
            <Menu type='button' onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? <IoMdClose size={25} /> : <FiMenu size={25} />}
            </Menu>

        </StyledHeader >
    )
}

export default Header