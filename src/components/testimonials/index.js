import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Depoimento1 from './images/Depoimento1.png';
import Depoimento2 from './images/Depoimento2.png';
import Depoimento3 from './images/Depoimento3.png';

const Icon = styled(FontAwesomeIcon)`
font-size: 40px;
margin: 10px auto 30px;
display: block;
color: #bd0003;
`

const Testimonies = styled.div`
display: flex;
justify-content: center;
column-gap: 30px;
flex-wrap: wrap;
`

const Testimony = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
margin-bottom: 40px;
font-weight: 600;

img {
    width: 100%;
}

@media screen and (min-width: 540px) {
    width: 500px;
}
`

function Testimonials () {
    return (
        <>
            <Icon icon={faEllipsis} />
            <h2>Depoimentos de alguns clientes:</h2>
            <Testimonies>
                <Testimony>
                    <p>19 de Junho de 2022</p>
                    <img src={Depoimento3} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>11 de Junho de 2022</p>
                    <img src={Depoimento2} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>31 de Maio de 2022</p>
                    <img src={Depoimento1} alt="Depoimento" />
                </Testimony>
            </Testimonies>
        </>
    )
}

export default Testimonials;