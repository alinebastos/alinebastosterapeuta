import { useEffect } from 'react';
import PaymentInfo from '../../components/payment-info';
import styled from 'styled-components';
import Testimonials from '../../components/testimonials';

const Header = styled.div`
    max-width: 1920px;
    height: 300px;
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
        background: rgba(74.1, 0, 1.1, 0.70) none repeat scroll 0 0;
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

function ApometriaCosmica () {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <Header>       
            <h1>Apometria Cósmica e Dinâmica</h1>
        </Header>
        <Main>
            <h2>O que é Apometria Cósmica e Dinâmica?</h2>
            <p>A Apometria Cósmica faz parte de uma nova proposta de terapia energética, através da Tecnologia do Espírito, que nos conecta com uma parte perdida ou esquecida em nós, permitindo que nos conheçamos melhor, fazendo-nos mais conscientes de nossos padrões de pensamentos, padrões de comportamentos e de emoções, o que nos abre para a possibilidade de uma real transformação e harmonização pessoal</p>
            <p>Com a utilização da técnica, com a ajuda das egrégoras de Mestres Ascencionados, Comandos, Federação Galáctica, Índios Xamãs, Guardiões de Terra e os seus próprios mentores, ocorrerão vários processos que ajudarão no sentido de facilitar sua ascensão espiritual e liberação de crenças limitantes, bloqueios, emoções negativas, dentre outros.</p>
            <h3>Alguns dos benefícios da Apometria Cósmica</h3>
            <ListWrapper>
                <List>                   
                    <li>Limpeza profunda no campo energético;</li>
                    <li>Alinhamentos dos chakras;</li>
                    <li>Quebra de contratos, pactos e acordos que impedem o seu processo evolutivo;</li>
                    <li>Remoção ou harmonização de registros akáshicos negativos;</li>
                    <li>Libertação de crenças limitantes;</li>
                    <li>Limpeza de magias, feitiçarias e trabalhos;</li>
                    <li>Remoção de Implantes Negativos;</li>
                    <li>Liberação de energias nocivas;</li>
                    <li>Limpeza de ambiente;</li>
                    <li>Proteção espiritual.</li>
                </List>
            </ListWrapper>
            {/* <BoxWrapper>
                <h3>Agendamento</h3>
                <Box>
                    <p><b>Informações sobre o atendimento:</b></p>
                    <p>O atendimento dura entre 1h e 1h30min.</p>
                    <p>No horário marcado, teremos uma breve conversa online, pelo Google Meet, para nos conhecermos e conversarmos. O Link será enviado junto com a confirmação do seu agendamento. Em caso de dúvida sobre o link ou sobre o Google Meet é só entrar em contato comigo pelo <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>
                    <p>Após nossa conversa, deixe um copo de água ao seu lado para beber ao levantar, deite e relaxe. É completamente normal dormir, não se preocupe se isso acontecer, o tratamento ocorrerá de qualquer forma.</p>
                    <p>Reserve esse momento para você, certifique-se de que não será interrompida(o).</p>
                    <p>No final haverá o envio de Reiki Xamânico para amplificar o seu bem-estar.</p>
                    <p>Depois é encaminhado um áudio gravado com tudo o que foi feito no atendimento.</p>
                    <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!!</b></p>
                    <PaymentInfo price="144" />
                    <ButtonLink href="https://calendly.com/alinebastos/agenda" target="_blank">Quero Agendar!</ButtonLink>
                </Box>
            </BoxWrapper> */}
        </Main>
        <Testimonials />
        </>
    );
}

export default ApometriaCosmica;