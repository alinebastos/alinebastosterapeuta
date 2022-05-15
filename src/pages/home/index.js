import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Auramaster from './images/AuraMaster.png';
import Unconscious from './images/Unconscious.png';
import TerapiaCosmica from './images/TerapiaCosmica.png';
import styled from 'styled-components';

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto 80px;
    background-image: url('happiness13.jpg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        background: rgba(44, 203, 56, 0.80) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }
`

const Main = styled.main`
    max-width: 1024px;
    padding: 0 10px;
    margin: 0 auto;
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
    border: 1px solid #2acb35;
    border-radius: 8px;
    padding: 0 20px 20px;
    justify-content: space-around;
    width: 320px;
    margin-bottom: 40px;
`

const TherapyTitle = styled.h3`
    height: 40px;
    line-height: 20px;
    text-align: center;
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
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
        background: url('check.png') no-repeat center left;
        font-size: 15px;
    }
`

const ButtonLink = styled(NavLink)`
    display: block;
    width:200px;
    height:50px;
    border-radius: 5px;
    background-color: #2acb35;
    color: #fff;
    text-align: center;
    line-height: 50px;

    &:hover {
        color: #fff;
        background-color: #21a02a;
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
                        <Logo src={Auramaster} alt="Aura Master Logo" />
                        <p>O Aura Master é um sistema de tratamento da aura (campo de energia) que promove a modificação de crenças limitantes, limpeza de problemas, traumas, fobias e conflitos, criação de metas e outras questões do inconsciente que impactam diretamente sua vida pessoal ou profissional. Tudo isso de forma simples, rápida e prática!</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/aura-master">Saiba Mais!</ButtonLink>
                    </Therapy>
                    <Therapy>
                        <TherapyTitle>Terapia Cósmica de Lótus</TherapyTitle>
                        <Logo src={TerapiaCosmica} alt="Terapia Cósmica Logo" />
                        <p>Quando nossos canais de energia ficam obstruídos, sobrevem a enfermidade. A finalidade da Terapia Cósmica de Lótus é reintegrar e harmonizar os corpos, desbloquear os canais de energia e promover o reabastecimento energético das células, órgãos, sistemas e chakras, equilibrando, assim, os corpos Físico,  Etérico, Mental, Emocional e Espiritual.</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/terapia-cosmica">Saiba Mais!</ButtonLink>                        
                    </Therapy>
                    <Therapy>
                        <TherapyTitle>Unconscious Therapy</TherapyTitle>
                        <Logo src={Unconscious} alt="Unconscious Therapy Logo" />
                        <p>O objetivo da Unconscious Therapy é mudar as Sinapses Neurais negativas e transformá-las em positivas, devolvendo assim a capacidade de conviver com fatos ou emoções sofridas no passado de forma leve e natural. Esta Terapia nos traz a possibilidade de reescrever nossas histórias e nos libertar de medos, angústias, desafetos e tantas outras emoções reativas que tanto nos faz sofrer.</p>
                        <ButtonLink style={{ marginBottom: '20px'}} to="/unconcious-therapy">Saiba Mais!</ButtonLink>
                    </Therapy>
                </Therapies>
            </Main>
        </>
    );
}

export default Home;