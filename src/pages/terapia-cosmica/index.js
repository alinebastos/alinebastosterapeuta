import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    background-image: url('happiness3.jpg');
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

const Video = styled.div`
    display: none;

    @media screen and (min-width: 600px) {
        display: block;
        text-align: center;
        margin: 50px auto;
    }
`

const BoxWrapper = styled.div`
    @media screen and (min-width: 767px) {
        width: 70%;
        margin 0 auto;
    }
`

const Box = styled.div`
    padding: 20px;
    border: 1px solid #2acb35;
    border-radius: 5px;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin: 10px auto 30px;
    display: block;
    color: #2acb35;
`

const ButtonLink = styled.a`
    display: block;
    width:200px;
    height:50px;
    border-radius: 5px;
    background-color: #2acb35;
    color: #fff;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;

    &:hover {
        color: #fff;
        background-color: #21a02a;
    }

    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
        text-decoration: none;
    }
`

function TerapiaCosmica () {
    const [disabled, setDisabled] = useState(false);

    const check1 = useRef(false);
    const check2 = useRef(false);
    const check3 = useRef(false);

    function handleInputChange(e) {
        const condOne = check1.current.checked;
        const condTwo = check2.current.checked;
        const condThree = check3.current.checked;

        if (condOne && condTwo && condThree) {
            console.log("disabled");
            setDisabled((prevState) => !prevState);
        } else {
            setDisabled(false);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header>       
                <h1>Terapia Cósmica de Lótus</h1>
            </Header>
            <Main>
                <h2>O Que é a Terapia Cósmica de Lótus?</h2>
                <Video><iframe width="560" height="315" src="https://www.youtube.com/embed/6XXPHO0QphQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Video>                
                <h3>Terapia Cósmica de Lótus</h3>
                <p>A Terapia Cósmica de Lótus chega até nós como uma dádiva, exatamente agora que estamos vivenciando grandes mudanças internas e externas, onde buscamos a causa primeira de nossos desajustes.</p>
                <p>A saúde pressupõe um equilíbrio entre os corpos: Físico, Etérico, Mental, Emocional e Espiritual. Um desequilíbrio em qualquer um desses promove o desequilíbrio de todos.</p>
                <p>Quando nossos canais de energia ficam obstruídos, sobrevém a enfermidade.</p>
                <p>A finalidade da Terapia Cósmica de Lótus é reintegrar e harmonizar os corpos, desbloquear os canais de energia e promover o reabastecimento energético das células, órgãos, sistemas e chakras.</p>
                <p>Os símbolos Sagrados utilizados na Terapia Cósmica de Lótus permitem a abertura dos portais internos, os quais acessam outras dimensões (corpos), trabalhando assim na CAUSA do desequilíbrio ou enfermidade.</p>
                <p>A Terapia Cósmica de Lótus é uma técnica única e inovadora, e foi canalizada pela Dra. Lucy Ferranti junto aos Mestres do Planeta Lótus.</p>
                <BoxWrapper>
                    <h3>Agendamento</h3>
                    <Box>
                        <p><b>Valor:</b> R$ 200,00</p>
                        <p><b>Formas de pagamento</b></p>
                        <p><b>PIX:</b> alineabp@gmail.com</p>
                        <p><b>TED/DOC:</b><br />
                        Aline Bastos Pinto<br />
                        Banco: Nubank - 0260<br />
                        Agência: 0001<br />
                        Conta: 85967030-2</p>
                        <p>O pagamento e o envio do comprovante devem ser feitos em até 2 (dois) dias antes da consulta.</p>
                        <Icon icon={faEllipsis} />
                        <p>A duração do atendimento de Aura Master varia entre 1h e 2h, então reserve este tempo no dia do atendimento.</p>
                        <p>O atendimento é online, pelo Google Meet. O link será enviado para o seu whatsapp alguns minutos antes da consulta.</p>
                        <p>Para qualquer eventualidade, pode entrar em contato comigo pelo WhatsApp: (51) 98301-1098</p>
                        <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!!</b></p>
                        <p>Leia as informações e marque TODAS as alternativas:</p>
                        <p>
                            <input ref={check1}
                                name="isGoing"
                                type="checkbox"
                                onChange={() => handleInputChange()} /> Estou ciente de que eu sou responsável pelo meu processo, e não o terapeuta<br />
                            <input ref={check2}
                                name="isGoing"
                                type="checkbox"
                                onChange={() => handleInputChange()} /> Estou aberto e permito que meu campo seja acessado, a fim de que as curas necessárias aconteçam<br />
                            <input ref={check3}
                                name="isGoing"
                                type="checkbox"
                                onChange={() => handleInputChange()} /> Estou ciente que só poderei cancelar meu atendimento até 24 horas antes da data e hora agendada.
                        </p>
                        <ButtonLink className={`${!disabled ? "disabled" : ""}`} href="https://calendly.com/alynebastoss/terapia-cosmica-de-lotus" target="_blank">Quero Agendar!</ButtonLink>
                    </Box>
                </BoxWrapper>
            </Main>
        </>
    );
}

export default TerapiaCosmica;