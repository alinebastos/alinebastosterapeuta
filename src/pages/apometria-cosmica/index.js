import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    background-image: url('happiness20.jpg');
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

const ListWrapper = styled.div`
    margin-bottom: 40px;
`

const List = styled.ul`
    li {
        padding-left: 28px;
        background: url('check.png') no-repeat center left;
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

function ApometriaCosmica () {
    const [disabled, setDisabled] = useState(false);

    const check1 = useRef(false);
    const check2 = useRef(false);
    const check3 = useRef(false);
    const check4 = useRef(false);

    function handleInputChange(e) {
        const condOne = check1.current.checked;
        const condTwo = check2.current.checked;
        const condThree = check3.current.checked;
        const condFour = check4.current.checked;

        if (condOne && condTwo && condThree && condFour) {
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
            <h1>Apometria Cósmica</h1>
        </Header>
        <Main>
            <h2>O que é Apometria Cósmica?</h2>
            <p>A Apometria Cósmica faz parte de uma nova proposta de terapia energética, através da Tecnologia do Espírito, que nos conecta com uma parte perdida ou esquecida em nós, permitindo que nos conheçamos melhor, fazendo-nos mais conscientes de nossos padrões de pensamentos, padrões de comportamentos e de emoções, o que nos abre para a possibilidade de uma real transformação e harmonização pessoal</p>
            <p>A técnica visa o tratamento e a harmonização dos múltiplos aspectos que movem as energias humanas. Somos um agregado de vários níveis de consciência e esses níveis são também energia. Essas energias podem entrar em conflito, desequilíbrio e desarmonia.</p>
            <p>A Apometria permite que nos conheçamos melhor, nos tornando conscientes de nossos padrões de pensamentos, emoções e comportamentos. Limpando e desbloqueando as energias densas que nos impedem de fluir com a vida.</p>
            <p>Com a utilização da técnica, com a ajuda das egrégoras de Mestres Ascencionados, Comandos, Federação Galáctica, Índios Xamãs, Guardiões de Terra e os seus próprios mentores, ocorrerão vários processos que ajudarão no sentido de facilitar sua ascensão espiritual e liberação de crenças limitantes, bloqueios, emoções negativas, dentre outros.</p>
            <h3>Alguns dos benefícios da Apometria Cósmica</h3>
            <ListWrapper>
                <List>
                    <li>Dissociar estados de consciência negativos como medo, culpa, dor, mágoa, raiva, etc</li>
                    <li>Limpeza Profunda no campo energético</li>
                    <li>Alinhamentos dos chakras</li>
                    <li>Quebra de contratos, pactos e acordos que impedem o seu processo evolutivo</li>
                    <li>Libertação de crenças limitantes</li>
                    <li>Limpeza de magia, feitiços e trabalhos</li>
                    <li>Remoção de Implantes Negativos</li>
                    <li>Liberação de energias nocivas</li>
                    <li>Clareza na tomada de decisões</li>
                    <li>Limpeza de Ambiente</li>
                </List>
            </ListWrapper>
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
                    <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o WhatsApp: <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">(51) 98301-1098</a>.</p>
                    <Icon icon={faEllipsis} />
                    <p><b>Informações sobre o atendimento:</b></p>
                    <p>
                        <List>
                            <li>Deitar no horário combinado</li>
                            <li>Reservar esse momento para você, certifique-se que não será interrompido</li>
                            <li>Colocar um copo de água do lado da cama, beber ao final do atendimento</li>
                        </List>
                    </p>
                    <p>O atendimento é realizado a distância, não é necessário realizar nenhum tipo de chamada (inclusive vídeo).</p>
                    <p>O atendimento dura em torno de 1 hora.</p>
                    <p>Depois é encaminhado um áudio, gravado com o que foi feito no atendimento</p>
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
                            onChange={() => handleInputChange()} /> Permito acesso aos meus Registros Akáshicos<br />
                        </label>
                        <label>
                        <input ref={check4}
                            name="isGoing"
                            type="checkbox"
                            onChange={() => handleInputChange()} /> Estou ciente que só poderei cancelar meu atendimento até 24 horas antes da data e hora agendada.
                        </label>
                    </p>
                    <ButtonLink className={`${!disabled ? "disabled" : ""}`} href="https://calendly.com/alynebastoss/apometria-cosmica" target="_blank">Quero Agendar!</ButtonLink>
                </Box>
            </BoxWrapper>
        </Main></>
    );
}

export default ApometriaCosmica;