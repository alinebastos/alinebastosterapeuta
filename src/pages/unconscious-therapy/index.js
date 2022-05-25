import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    background-image: url('happiness19.jpg');
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

function UnconsciousTherapy () {
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
            <h1>Unconscious Therapy</h1>
        </Header>
        <Main>
            <h2>O que é Unconscious Therapy?</h2>
            <p>O inconsciente é nada mais do que a soma de nossas memórias, vivências, sentimentos e emoções, é um depósito infinito de experiências de vida. Porém, muito além de arquivá-las, ele ainda as associa, num processo que foge à nossa compreensão. Nem tudo o que passamos na nossa vida é agradável. Algumas situações são tão terríveis que nos esquecemos delas, pois a simples lembrança já nos causa uma imensa dor.</p>
            <p>Isso ocorre porque, como evita ao máximo o sofrimento, a nossa mente busca reprimir essas lembranças para nunca mais rememorarmos aquela situação tensa, funcionando como um instinto de autodefesa.</p>
            <p>Infelizmente, contudo, nada é perfeito. Não eliminamos os traumas para sempre: eles ficam lá guardados, no inconsciente. Assim, diante de determinadas situações, podemos ter reações inesperadamente exaltadas, ou até violentas.</p>
            <p>Não podemos mudar o passado. Isto é o que todos pensam e sofrem tanto por causa disto. Profundo engano, o passado pode ser ressignificado, e todos os males que ele nos causou podem ser transformados em força e crescimento para nossa alma.</p>
            <p>Unconscious Therapy é uma técnica inovadora, com o objetivo de libertar-nos dessas questões e devolver-nos o controle sobre nossas ações, com base no poder da escolha e não mais como reféns de fatos passados.</p>
            <p>Unconscious Therapy é uma técnica revolucionária que promove a eliminação definitiva dos traumas através da dissolução da informação gravada e fixada no neurônio. Esta poderosa técnica atua nos pontos de estrangulamento mental, chamados de nódulos energéticos.</p>
            <p>Nós possuímos caminhos de informações neurais ligados ao inconsciente. Cada caminho é responsável por uma informação vital, e quando essa informação é negativa se transforma em nódulo energético que impede o trânsito normal das emoções trazendo consequências muito negativas ao ser humano.</p>
            <p>O objetivo da Unconscious Therapy é mudar as Sinapses Neurais negativas e transformá-las em positivas, devolvendo assim a capacidade de conviver com fatos ou emoções sofridas no passado de forma leve e natural.</p>
            <p>Esta Terapia nos traz a possibilidade de reescrever nossas histórias e nos libertar de medos, angústias, traumas, desafetos e tantas outras emoções reativas que tanto nos fazem sofrer.</p>
            <p>Unconscious Therapy atua de forma eficaz e definitiva reformulando nossas sinapses neurais e nos conectando a outras realidades agora escolhidas por nós com nova consciência.</p>
            <BoxWrapper>
                <h3>Agendamento</h3>
                <Box>
                    <p><b>Valor:</b> R$ 300,00</p>
                    <p><b>Formas de pagamento</b></p>
                    <p><b>PIX:</b> alineabp@gmail.com</p>
                    <p><b>TED/DOC:</b><br />
                    Aline Bastos Pinto<br />
                    Banco: Nubank - 0260<br />
                    Agência: 0001<br />
                    Conta: 85967030-2</p>
                    <p><b>Cartão de Crédito: </b><a href="https://picpay.me/alynebastoss/300.0" target="_blank" rel="noreferrer" >Link para o PicPay</a></p>
                    <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o WhatsApp: <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">(51) 98301-1098</a>.</p>
                    <Icon icon={faEllipsis} />
                    <p>A duração do atendimento de Unconscious Therapy varia entre 1h e 2h, então reserve este tempo no dia do atendimento.</p>
                    <p><b>Importante:</b> Nessa técnica você tem que ficar deitada(o) a maior parte do tempo, com o computador/webcam, notebook ou celular mostrando seu rosto e tórax, então já se programe antecipadamente.</p>
                    <p>O atendimento é online, pelo Google Meet. O link será enviado para o seu whatsapp alguns minutos antes da consulta.</p>
                    <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!!</b></p>
                    <p>Leia as informações e marque TODAS as alternativas:</p>
                    <p>
                        <label>
                        <input ref={check1}
                            name="isGoing"
                            type="checkbox"
                            onChange={() => handleInputChange()} /> Estou ciente de que eu sou responsável pelo meu processo, e não o terapeuta<br />
                        </label>
                        <label>
                        <input ref={check2}
                            name="isGoing"
                            type="checkbox"
                            onChange={() => handleInputChange()} /> Estou aberto e permito que meu campo seja acessado, a fim de que as curas necessárias aconteçam<br />
                        </label>
                        <label>
                        <input ref={check3}
                            name="isGoing"
                            type="checkbox"
                            onChange={() => handleInputChange()} /> Estou ciente que só poderei cancelar meu atendimento até 24 horas antes da data e hora agendada.
                        </label>
                    </p>
                    <ButtonLink className={`${!disabled ? "disabled" : ""}`} href="https://calendly.com/alynebastoss/unconscious-therapy" target="_blank">Quero Agendar!</ButtonLink>
                </Box>
            </BoxWrapper>
        </Main></>
    );
}

export default UnconsciousTherapy;