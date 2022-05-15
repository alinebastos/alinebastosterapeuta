import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SiteLogo from './images/AlyneBastossWhite.png';
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
    height: 30px;
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


function Footer () {
    return (
        <HeaderWrapper>
            <Container>
                <Logo>
                    <NavLink to="/">
                        <LogoImg src={SiteLogo} alt="Alyne Bastoss" />
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
                            <MenuLink to="/aura-master" alt="Link para a página Aura Master">
                                Aura Master
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/terapia-cosmica" alt="Link para a página Terapia Cósmica de Lótus">
                                Terapia Cósmica de Lótus
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink to="/unconcious-therapy" alt="Link para a página Unconcious Therapy">
                                Unconcious Therapy
                            </MenuLink>
                        </li>
                    </ul>
                </Nav>                
                <Icons />                
            </Container>
        </HeaderWrapper>
    );
}

export default Footer;
