import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
    background-image: url('happiness10.jpg');
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

function AuraMaster () {
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
                <h1>Aura Master</h1>
            </Header>
            <Main>
                <h2>Aura Master: O que é, para que serve e como funciona</h2>
                <p>Já pensou como seria bom se você pudesse resolver aquelas dores emocionais como: ansiedade, medo, traumas, depressão, mágoas, desânimo, vazio na alma e todos os bloqueios psicológicos que fazem você se sentir incompreendido e insatisfeito com a vida?</p>
                <p>Ainda mais se você conseguisse fazer isso de forma rápida e simples, sem precisar de métodos ultrapassados, demorados e caros, não é mesmo?</p>
                <p>Desde que foi criado e difundido o Método Aura Master por Bruno Gimenes e Patrícia Cândido, isso é possível. Entenda o que é, para que serve e como funciona o Aura Master, neste conteúdo que preparamos para você.</p>
                <Video><iframe width="560" height="315" src="https://www.youtube.com/embed/eCtiwr7iQ9g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Video>
                <h3>O que é Aura Master?</h3>
                <p>No mundo de hoje, onde o medo, a depressão, a angústia, as crises de ansiedade e os pensamentos suicidas assombram a humanidade, não podemos esperar por tratamentos terapêuticos longos e demorados, precisamos de soluções rápidas.</p>
                <p>Nesse sentido, o Aura Master é o que faltava para o alívio imediato das dores do corpo e da alma, em pessoas e animais, de uma forma absurdamente simples e sem a necessidade de recursos especiais e nem de remédios.</p>
                <p>O Aura Master é uma técnica terapêutica de ação rápida, que ativa os poderes ocultos de autocura, realizando mudanças no seu estado emocional, mental e espiritual.</p>
                <h3>Como funciona o Aura Master?</h3>
                <p>Quando a técnica terapêutica Aura Master é aplicada, ela vai direto ao inconsciente e faz a limpeza que precisa fazer. Ela edita a sua memória e apaga aquilo que está ali só para te fazer mal. Tudo o que hoje tem uma trava na sua vida pode ter uma relação com alguma coisa que você carrega, não faz parte de você e precisa abrir espaço para dar lugar a sua essência. </p>
                <h3>Aura Master para animais de estimação</h3>
                <p>No caso da aplicação da técnica Aura Master em animais de estimação, as mesmas estruturas e recomendações de tempo devem ser seguidas. Entretanto é recomendado inicialmente apenas uma sessão por semana, exceto em casos de emergência em que a técnica Aura Master pode ser aplicada, no máximo, uma sessão por dia.</p>
                <h3>Benefícios do Aura Master</h3>
                <ListWrapper>
                    <List>
                        <li>Enfrentar os medos</li>
                        <li>Destravar a prosperidade e gerar riqueza</li>
                        <li>Ter soluções instantâneas para problemas difíceis</li>
                        <li>Elevar a vibração e energia vital de forma imediata</li>
                        <li>Curar relacionamentos e aproximar pessoas certas</li>
                        <li>Aumentar a autoestima</li>
                        <li>Mudar de carreira de forma equilibrada</li>
                        <li>Curar fobias</li>
                        <li>Curar depressão, crises de ansiedade e síndrome do pânico</li>
                        <li>Vencer o medo de falar em público</li>
                        <li>Perder a timidez</li>
                        <li>Superar o sentimento de rejeição</li>
                        <li>Limpar memórias negativas do passado</li>
                        <li>Perdoar com facilidade</li>
                        <li>Desenvolver disciplina e persistência</li>
                        <li>Acabar com a preguiça e a procrastinação</li>
                        <li>Superar separação conjugal com harmonia</li>
                        <li>Resolver conflitos familiares entre pais, filhos e cônjuges</li>
                        <li>Despertar a criatividade</li>
                    </List>
                    <List>
                        <li>Eliminar pensamentos negativos repetitivos e autodestrutivos</li>
                        <li>Blindar-se contra críticas</li>
                        <li>Ativar sua intuição e sexto sentido</li>
                        <li>Tomar decisões com confiança</li>
                        <li>Ter mais energia, disposição, motivação e vontade de viver</li>
                        <li>Ter idéias para gerar riqueza e aceleração financeira</li>
                        <li>Acabar com a carência e o sentimento de abandono</li>
                        <li>Eliminar a rejeição, o vazio existencial, a injustiça e a mágoa</li>
                        <li>Acabar com a vergonha e a fragilidade emocional</li>
                        <li>Acabar com o medo de ser líder e com o medo do sucesso</li>
                        <li>Receber inspirações do inconsciente diariamente</li>
                        <li>Despertar a criatividade e a inovação</li>
                        <li>Curar ou aliviar crises alérgicas</li>
                        <li>Curar desvios de humor e crises de raiva</li>
                        <li>Curar vícios</li>
                        <li>Curar ou aliviar dores em geral</li>
                        <li>Conseguir o peso desejado</li>
                        <li>Limpar crenças limitantes</li>
                        <li>Acabar com gripes ou resfriados recorrentes</li>
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
                        <ButtonLink className={`${!disabled ? "disabled" : ""}`} href="https://calendly.com/alynebastoss/aura-master" target="_blank">Quero Agendar!</ButtonLink>
                    </Box>
                </BoxWrapper>
            </Main>
        </>
    );
}

export default AuraMaster;