import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Depoimento from './images/Depoimento.png';
import Depoimento2 from './images/Depoimento2.png';
import Depoimento3 from './images/Depoimento3.png';

const Header = styled.div`
    max-width: 1920px;
    height: 300px;
    margin: 0 auto 80px;
    background-image: url('happiness2.jpg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        background: rgba(74.1, 0, 1.1, 0.60) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }

    @media screen and (min-width: 767px) {
        height: 500px;
    }
`

const Main = styled.main`
    max-width: 1024px;
    padding: 0 10px;
    margin: 0 auto;
`

const ListWrapper = styled.div`
    margin-bottom: 40px;

    @media screen and (min-width: 767px) {
        display: flex;
        justify-content: space-around;
    }
`

const List = styled.ul`
    li {
        padding-left: 28px;
        background: url('red-check.png') no-repeat center left;
        font-size: 15px;
    }
`

const Therapies = styled.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 10px;
    flex-wrap: wrap;
`

const Therapy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #bd0003;
    border-radius: 8px;
    padding: 0 20px 20px;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 40px;
    background-color: #fff;

    @media screen and (min-width: 420px) {
        width:320px;
    }
`

const TherapyTitle = styled.h3`
    height: 40px;
    line-height: 20px;
    text-align: center;
`

const ButtonLink = styled(NavLink)`
    display: block;
    width:200px;
    height:50px;
    border-radius: 5px;
    background-color: #bd0003;
    color: #fff;
    text-align: center;
    line-height: 50px;

    &:hover {
        color: #fff;
        background-color: #790103;
    }
`

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

function Home () {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header>       
                <h1>Seja a Sua Melhor Versão!</h1>
            </Header>
            <Main>
                <h2>Terapias: O que são e para que servem?</h2>
                <p><b>A função do Terapeuta é servir de <b>canal</b> e <b>veículo</b> às energias de luz, através da disponibilização da sua estrutura física, energética e espiritual, ancorando assim, as frequências de cura que o consulente necessita receber.</b></p>
                <p>Pensamentos, situações e emoções vividas de forma negativa e descontrolada como medo, raiva, culpa, traumas e outros, vão se aderindo ao campo sutil vibracional e formam bloqueios energéticos. Esses bloqueios podem provocar males como ansiedade, estresse, dor física, traumas, doenças e outros desequilíbrios.</p>
                <p>Ao fazer terapia, você pode liberar esses bloqueios, eliminar aspectos negativos de sua vida diária, e atrair aspectos positivos que lhe proporcionarão um nível mais elevado de bem-estar físico, emocional, energético, espiritual e mental.</p>
                <p>Aqui você encontra o acolhimento necessário para tratar das suas emoções e dores com amorosidade e livre de julgamentos.</p>
                <h3 style={{textAlign: 'center', height: '30px 0'}}>Alguns exemplos em que as terapias podem te ajudar:</h3>
                    <ListWrapper>
                        <List>
                            <li>Limpar crenças limitantes</li>
                            <li>Pessoas com pensamentos negativos e destrutivos</li>
                            <li>Pessoas em convívio de pessoas tóxicas ou ambientes pesados</li>
                            <li>Pessoas em busca do autoconhecimento e expansão da consciência</li>
                            <li>Encontrar seu propósito e sentido de vida</li>
                            <li>Encontrar a conexão com a sua essência</li>
                            <li>Falta de prosperidade</li>
                        </List>
                        <List>
                            <li>Depressão</li>
                            <li>Transtorno de Ansiedade Generalizada</li>
                            <li>Síndrome do Pânico</li>
                            <li>Angústia</li>
                            <li>Autossabotagem</li>
                            <li>Processos Obsessivos</li>
                            <li>Pessoas em situações estressantes</li>
                        </List>
                    </ListWrapper>
                <h3 style={{textAlign: 'center', margin: '30px 0'}}>Encontre aqui a Terapia mais adequada para você:</h3>
                <Therapies>
                    <Therapy>
                        <TherapyTitle>Aura Master</TherapyTitle>
                        <p>O Aura Master é um sistema de tratamento da aura (campo de energia) que promove a modificação de crenças limitantes, limpeza de problemas, traumas, fobias e conflitos, criação de metas e outras questões do inconsciente que impactam diretamente sua vida pessoal ou profissional. É uma técnica terapêutica de ação rápida, que ativa os poderes ocultos de autocura, realizando mudanças no seu estado emocional, mental e espiritual. Tudo isso de forma simples, rápida e prática!</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/aura-master">Saiba Mais!</ButtonLink>
                    </Therapy>
                    <Therapy>
                        <TherapyTitle>Apometria Cósmica e Dinâmica</TherapyTitle>
                        <p>A Apometria Cósmica permite que nos conheçamos melhor, nos tornando conscientes de nossos padrões de pensamentos, emoções e comportamentos, limpando e desbloqueando as energias densas que nos impedem de fluir com a vida. Com a utilização da técnica ocorrerão vários processos que ajudarão no sentido de facilitar sua ascensão espiritual e liberação de crenças limitantes, bloqueios, emoções negativas, dentre outros fatores que acabam por bloquear certos aspectos da sua vida.</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/apometria-cosmica">Saiba Mais!</ButtonLink>
                    </Therapy>
                    <Therapy>
                        <TherapyTitle>Cura Multidimensional Arcturiana</TherapyTitle>
                        <p>A Cura Multidimensional Arcturiana é uma jornada para a cura interior e autoconhecimento. É uma terapia energética que utiliza a frequência vibracional de símbolos da geometria sagrada. Essas frequências trabalham nos campos físico, mental, emocional e espiritual, através do coração. O propósito do tratamento é elevar o seu nível vibracional. Os símbolos atuam no nível da alma e dos corpos extra físicos indo até a raiz kármica e causal, harmonizando as vibrações que vão se integrar e refletir na sua vida atual.</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/cura-arcturiana">Saiba Mais!</ButtonLink>
                    </Therapy>
                </Therapies>                
                <Icon icon={faEllipsis} />
            </Main>
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
                    <img src={Depoimento} alt="Depoimento" />
                </Testimony>
            </Testimonies>
        </>
    );
}

export default Home;