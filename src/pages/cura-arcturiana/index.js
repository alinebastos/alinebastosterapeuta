import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    max-width: 1920px;
    height: 300px;
    margin: 0 auto;
    background-image: url('happiness17.jpg');
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
`

const List = styled.ul`
    li {
        padding-left: 28px;
        background: url('red-check.png') no-repeat center left;
        font-size: 15px;
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
    border: 1px solid #bd0003;
    border-radius: 5px;
    background-color: #fff;
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin: 10px auto 30px;
    display: block;
    color: #bd0003;
`

const ButtonLink = styled.a`
    display: block;
    width:200px;
    height:50px;
    border-radius: 5px;
    background-color: #bd0003;
    color: #fff;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;

    &:hover {
        color: #fff;
        background-color: #790103;
    }

    &.disabled {
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.5;
        text-decoration: none;
    }
`

function CuraArcturiana () {
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
            <h1>Cura Multidimensional Arcturiana</h1>
        </Header>
        <Main>
        <h2>Quem são os Arcturianos?</h2>

        <p>Os Arcturianos são uma civilização de quinta dimensão. Sua energia ancora e trabalha na cura emocional, mental e espiritual para a humanidade. Eles trabalham com os seres confederados, ajudando os humanos a se sintonizar com as frequências da 5ª dimensão no planeta Terra.</p>


        <h2>O que é a Cura Multidimensional Arcturiana?</h2>

        <p>A Cura Multidimensional Arcturiana é uma terapia unificada no amor incondicional. Este Sistema trata de curar os problemas da alma, mente, corpos e emoções.</p>

        <p>Todos possuem problemas nessas áreas, que surgem diariamente na vida, criando tristeza, desconforto, bloqueios, angústia e depressão. Toda e qualquer infelicidade e dor, instalam-se literalmente na nossa vida (eventualmente somatizando dores no nosso corpo físico) impedindo a nossa realização total como seres divinos que somos e criando os mais diversos obstáculos que nos impedem de andar com a vida para a frente.</p>

        <h3>As potencialidades da Cura Multidimensional Arcturiana são ilimitadas, aqui estão alguns exemplos:</h3>
            <ListWrapper>
                <List>
                    <li>Limpeza e Equilíbrio Energético;</li>
                    <li>Limpeza e Cura Kármica</li>
                    <li>Reequilíbrio das energias masculina e feminina;</li>
                    <li>Rescisão e corte de contratos e ligações energéticas;</li>
                    <li>Resgate do Poder Pessoal;</li>
                    <li>Limpeza e Cura de Vidas Passadas;</li>
                    <li>Limpeza, Resgate e Integração de Corpos Emocionais, Espirituais, etc;</li>
                    <li>Resgate e Cura da Criança Interior;</li>
                    <li>Limpezas de Magias, Feitiçarias e Trabalhos;</li>
                    <li>Purificação de DNA;</li>
                    <li>Reconexão com o Eu Superior;</li>
                    <li>Conexão à Rede Cristalina da Nova Terra.</li>
                </List>
            </ListWrapper>
            <BoxWrapper>
                <h3>Agendamento</h3>
                <Box>
                    <p><b>Informações sobre o atendimento:</b></p>
                    <p>O atendimento dura entre 1h e 1h30min.</p>
                    <p>No horário marcado, teremos uma breve conversa online, pelo Google Meet, para nos conhecermos e conversarmos. O Link será enviado junto com a confirmação do seu agendamento. Em caso de dúvida sobre o link ou sobre o Google Meet é só entrar em contato comigo pelo <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>
                    <p>Após nossa conversa, deixe um copo de água ao seu lado para beber ao levantar, deite e relaxe. É completamente normal dormir, não se preocupe se isso acontecer, o tratamento ocorrerá de qualquer forma.</p>
                    <p>Reserve esse momento para você, certifique-se de que não será interrompida(o).</p>
                    <p>Depois é encaminhado um áudio gravado com tudo o que foi feito no atendimento.</p>
                    <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!!</b></p>
                    <Icon icon={faEllipsis} />
                    <p><b>Informações sobre o valor e as formas de pagamento:</b></p>
                    <p><b>Valor: </b>R$ 144,00</p>
                    <p><b>Formas de pagamento</b></p>
                    <p><b>PIX:</b> alineabp@gmail.com</p>
                    <p><b>PayPal:</b> alineabp@gmail.com</p>
                    <p><b>Cartão de Crédito: </b><a href="https://mpago.la/33BwUJf" target="_blank" rel="noreferrer" >Link para o Mercado Pago</a></p>
                    <p><b>TED/DOC:</b><br />
                    Aline Bastos Pinto<br />
                    Banco: Nubank - 0260<br />
                    Agência: 0001<br />
                    Conta: 85967030-2</p>
                    <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o WhatsApp: <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">(51) 98301-1098</a>.</p>
                    <Icon icon={faEllipsis} />
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
                    <ButtonLink className={`${!disabled ? "disabled" : ""}`} href="https://calendly.com/alinebastos/agenda" target="_blank">Quero Agendar!</ButtonLink>
                </Box>
            </BoxWrapper>
        </Main></>
    );
}

export default CuraArcturiana;