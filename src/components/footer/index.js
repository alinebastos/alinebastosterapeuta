import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from './images/AlineBastosWhite.png';
import SocialIcons from '../social-icons';

const HeaderWrapper = styled.footer`
    background-color: #404040;
    width: 100%;
    margin-top:50px;

    @media screen and (min-width: 1100px) {
        padding: 10px 0;
    }
`;

const Container = styled.div`
    padding: 20px 10px;
    margin: 0 auto;
    max-width: 1024px;
    text-align: center;

    @media screen and (min-width: 768px) {        
        display: flex;
        Justify-content: space-between;
        align-items: center;
    }
`

const Logo = styled.div`
    height: 40px;
    width: 250px;
    margin: 0 auto 30px;

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`

const LogoImg = styled.img`
    width: 250px;
    height: 40px;
`

const Nav = styled.nav`
    margin-bottom: 30px;

    ul {
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`

const MenuLink = styled(NavLink)`
    display: block;
    font-size 14px;
    text-transform: uppercase;
    line-height: 30px;
    text-align: center;

    &:hover {
        color:#fff;
    }
`

const Icons = styled(SocialIcons)`
    a {
        &:hover {
            color: #fff;
        }
    }
`

const Social = styled.div`
    span {
        display: none;
    }

    @media screen and (min-width: 768px) {
        display: flex;

        span {
            display: block;
            font-weight: 600;
            color: #fff;
            margin: 0 20px 0 50px;
        }
    }    
`


function Footer () {
    return (
        <HeaderWrapper>
            <Container>
                <Logo>
                    <NavLink to="/">
                        <LogoImg src={SiteLogo} alt="aline bastos" />
                    </NavLink>
                </Logo>
                <Nav>
                    <ul>
                        <li>
                            <MenuLink to="/" alt="Link para a Home">
                                Home
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/apometria-cosmica" alt="Link para a página de Apometria Cósmica">
                                Apometria Cósmica
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/cura-arcturiana" alt="Link para a página Cura Multidimensional Arcturiana">
                                Cura Multidimensional Arcturiana
                            </MenuLink>
                        </li>
                    </ul>
                </Nav>
                <Social>         
                    <span>Contatos: </span><Icons /> 
                </Social>                 
            </Container>
        </HeaderWrapper>
    );
}

export default Footer;
