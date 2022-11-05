import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from './images/AlineBastosWhite2.png';
import SocialIcons from '../social-icons';

const HeaderWrapper = styled.footer`
    background-color: #5b5b5b;
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
    margin: 0 auto 30px;

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`

const LogoImg = styled.img`
    width: 250px;
    height: auto;
`

/* const Nav = styled.nav`
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
    font-weight: 600;
    text-shadow: 0px 0px 1px rgba(0,0,0,0.9);
    color: #fff;

    &:hover {
        color:#eee;
    }
` */

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
    const location = useLocation();

    if (location.pathname === '/faq-cura-arcturiana' || location.pathname === '/curso-cura-arcturiana') {
        return null
    }
    
    return (
        <HeaderWrapper>
            <Container>
                <Logo>
                    <NavLink to="/">
                        <LogoImg src={SiteLogo} alt="aline bastos" />
                    </NavLink>
                </Logo>
                {/* <Nav>
                    <ul>
                        <li>
                            <MenuLink to="/" alt="Link para a Home">
                                Home
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/aura-master" alt="Link para a página de Aura Master">
                                Aura Master
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/apometria-cosmica" alt="Link para a página de Apometria Cósmica">
                                Apometria Cósmica e Dinâmica
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/cura-arcturiana" alt="Link para a página Cura Multidimensional Arcturiana">
                                Cura Multidimensional Arcturiana
                            </MenuLink>
                        </li>
                    </ul>
                </Nav> */}
                <Social>         
                    <span>Contatos: </span><Icons /> 
                </Social>                 
            </Container>
        </HeaderWrapper>
    );
}

export default Footer;
