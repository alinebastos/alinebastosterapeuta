import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from './images/AlyneBastoss200.png';
import Butterfly from './images/Butterfly.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from '../social-icons'

const HeaderWrapper = styled.header`
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2);

    @media screen and (min-width: 1024px) {
        padding: 10px 0;
    }
`;

const Container = styled.div`
    padding: 0 10px;
    margin: 0;
    display: flex;
    Justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;

    @media screen and (min-width: 1024px) {
        height: 80px;
        padding: 0 20px;
    }
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 32px;

    @media screen and (min-width: 1024px) {
        order: 1;
    }
`

const LogoImg = styled.img`    
    width: 200px;
    height: 32px;
`

const NavToogle = styled.button`
    z-index: 7;
    border: 1px solid #aeaeae;
    background: #ffffff;
    margin: 0;
    border-radius: 3px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 24px;
    color: #2acb35;
`

const NavWrapper = styled.div`
    order: 1;
    position:relative;

    @media screen and (min-width: 1024px) {
        order: 2;
    }
`

const Nav = styled.nav`
    order: 1;
    display: none;

    @media screen and (max-width: 1024px) {
        &.show {
            display: block;
            min-width: 320px;
            position: absolute;
            top: 50px;
            left: -10px;
            border: 1px solid #aeaeae;
            background-color: #fff;
            z-index: 6;
    
            ul {
                flex-direction: column;
    
                li {
                    border-bottom: 1px solid #2acb35;
    
                    &:last-of-type {
                        border: none;
                    }
    
                    a {
                        display: block;
                        line-height: 60px;
                        padding: 0 0 0 10px;
                        width: 100%;
                        text-align: left;
    
                        &:hover {
                            background-color: rgba(44, 203, 56, 0.10);
                        }
    
                        img {
                            right: 10px;
                            top: 12px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {
        height: 60px;
        position: relative;
        z-index: 7;
        display: block;
    }

    ul {
        display: flex;
        
        li {
            display: flex;
            align-items: center;
            text-align: center;
            position: relative;
            height: 60px;
        }
    }
`

const MenuLink = styled(NavLink)`
    display: block;
    font-size 14px;
    font-weight: 700;
    color: #303030;
    text-transform: uppercase;
    line-height: 20px;
    padding: 0 30px;

    &.active {
        color: #2acb35;
    }

    img {
        opacity: 0;   
        position: absolute;
        right: 5px;
        top: 2px;
        width: 30px;
        height: auto;
        transition: all 0.5s ease 0s;
    }

    &:hover img,
    &:active img,
    &:focus img,
    &.active img {
        opacity: 1;
    }
`

const Social = styled.div`
    order: 3;

    span {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        display: flex;

        span {
            display: block;
            font-weight: 600;
        }
    }    
`


function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    return (
        <HeaderWrapper>
            <Container>
                <Logo>
                    <NavLink to="/">
                        <LogoImg src={SiteLogo} alt="Alyne Bastoss" />
                    </NavLink>
                </Logo>
                <NavWrapper>
                    <NavToogle className="menu-toggle" onClick={toggle} type='button'><Icon icon={isOpen ? faClose : faBars} className={`menu ${isOpen ? 'cross' : 'hamburger'}`} /></NavToogle>
                    <Nav className={`menu-links ${isOpen ? 'show' : ''}`}>
                        <ul>
                            <li>
                                <MenuLink to="/" onClick={toggle} onBlur={hide} onFocus={show} alt="Link para a Home">
                                    Home
                                    <img src={Butterfly} alt="Alyne Bastoss" />
                                </MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/apometria-cosmica" onClick={toggle} onBlur={hide} onFocus={show} alt="Link para a página de Apometria Cósmica">
                                    Apometria Cósmica
                                    <img src={Butterfly} alt="Alyne Bastoss" />
                                </MenuLink>
                            </li>
                            <li>
                                <MenuLink to="/unconcious-therapy" onClick={toggle} onBlur={hide} onFocus={show} alt="Link para a página Unconcious Therapy">
                                    Unconcious Therapy
                                    <img src={Butterfly} alt="Alyne Bastoss" />
                                </MenuLink>
                            </li>
                        </ul>
                    </Nav>
                </NavWrapper>
                <Social>
                   <span>Contatos:</span> <SocialIcons />
                </Social>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;
