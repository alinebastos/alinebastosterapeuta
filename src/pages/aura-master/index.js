import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: 0 auto;
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

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin: 10px auto 30px;
    display: block;
    color: #bd0003;
`

const ArrowIcon = styled(FontAwesomeIcon)`
    color: #bd0003;
    margin-right: 5px;
`

const BoxPromotion = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
`

const TitlePromotion = styled.h3`
    margin-top: 0;
    line-height: 2;
    text-align: center;
`

const TextPromotion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 30px;
`

const FootNote = styled.p`
    padding:0 0 20px;
`

const Structures = styled.div`
    color: #bd0003;

    b {
        font-weight: 600;
    }
`

function AuraMaster () {
    return (
        <>
            <Header>       
                <h1>Aura Master</h1>
            </Header>
            <Main>
                <BoxWrapper>
                    <h2>Promoção Black Dezembro!</h2>
                    <BoxPromotion>
                        <TitlePromotion>Descontos Progressivos:<br />
                        Quanto mais sessões, mais desconto!<br />
                        A Promoção irá até o dia 31 de Dezembro. Aproveite!</TitlePromotion>
                        <TextPromotion>
                            <span className="description"><ArrowIcon icon={faArrowRight} /> 1 sessão com 10% de desconto:</span>
                            <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 137,70</span><br />
                            <span className="description"><ArrowIcon icon={faArrowRight} /> 4 sessões com 20% de desconto:</span>
                            <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 489,60</span><br />
                            <span className="description"><ArrowIcon icon={faArrowRight} /> 8 sessões com 30% de desconto:</span>
                            <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 856,80</span><br />
                            <span className="description"><ArrowIcon icon={faArrowRight} /> 12 sessões com 40% de desconto:</span>
                            <span className="value">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R$ 1.101,60</span>
                        </TextPromotion>
                        <FootNote>** Valores válidos para pagamentos até 31 de Dezembro. **</FootNote>
                        <FootNote>Veja sobre agendamento, atendimento e formas de pagamento <a href="#agendamento">clicando aqui.</a></FootNote>
                        <ButtonLink href="https://calendly.com/alinebastos/agenda" target="_blank">Quero Agendar!</ButtonLink>
                    </BoxPromotion>
                </BoxWrapper>
                <h2>Aura Master: O que é, para que serve e como funciona</h2>
                <p>Já pensou como seria bom se você pudesse resolver aquelas dores emocionais como: ansiedade, medo, traumas, depressão, mágoas, desânimo, vazio na alma e todos os bloqueios psicológicos que fazem você se sentir incompreendido e insatisfeito com a vida?</p>
                <p>Ainda mais se você conseguisse fazer isso de forma rápida e simples, sem precisar de métodos ultrapassados, demorados e caros, não é mesmo?</p>
                <p>Desde que foi criado e difundido o Método Aura Master por Bruno Gimenes e Patrícia Cândido, isso é possível. Entenda o que é, para que serve e como funciona o Aura Master.</p>
                <h3>O que é Aura Master?</h3>
                <p>No mundo de hoje, onde o medo, a depressão, a angústia, as crises de ansiedade e os pensamentos suicidas assombram a humanidade, não podemos esperar por tratamentos terapêuticos longos e demorados, precisamos de soluções rápidas.</p>
                <p>Nesse sentido, o Aura Master é o que faltava para o alívio imediato das dores do corpo e da alma, em pessoas e animais, de uma forma absurdamente simples e sem a necessidade de recursos especiais e nem de remédios.</p>
                <p>O Aura Master é uma técnica terapêutica de ação rápida, que ativa os poderes ocultos de autocura, realizando mudanças no seu estado emocional, mental e espiritual.</p>
                <p>Só para ilustrar, imagine uma lâmpada coberta por poeira e fuligem. Ela jamais vai propagar toda a luz que está dentro dela, porque a sujeira ofusca quem ela é e a impede de expandir, muda até a sua força e a sua cor.</p>
                <p>O mesmo acontece quando somos manipulados por padrões, que a sociedade nos impõe, e acabamos vivendo um personagem. Enquanto a Aura Master vem para desfazer essas camadas que nos escondem e proporcionar o encontro com o “Eu da Alma” ou “Eu da Matriz Divina”.</p>
                <h3>Como funciona o Aura Master?</h3>
                <p>Quando a técnica terapêutica Aura Master é aplicada, ela vai direto ao inconsciente e faz a limpeza que precisa fazer. Ela edita a sua memória e apaga aquilo que está ali só para te fazer mal. Tudo o que hoje tem uma trava na sua vida pode ter uma relação com alguma coisa que você carrega, não faz parte de você e precisa abrir espaço para dar lugar a sua essência. </p>
                <h3>Para que serve o Aura Master?</h3>
                <p>O Método Aura Master serve para que você possa encontrar respostas, resolver traumas que carrega desde a infância. Você pode limpar uma culpa de anos por meio dessa técnica de alívio imediato.</p>
                <p>O Método Aura Master pode ajudar você, pessoas da sua família e amigos a:</p>
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
                <h3>Como funciona o Aura Master?</h3>
                <p>Quando a técnica terapêutica Aura Master é aplicada, ela vai direto ao inconsciente e faz a limpeza que precisa fazer. Ela edita a sua memória e apaga aquilo que está ali só para te fazer mal. Tudo o que hoje tem uma trava na sua vida pode ter uma relação com alguma coisa que você carrega, não faz parte de você e precisa abrir espaço para dar lugar a sua essência.</p>

                <p>O método Aura Master funciona por meio de 4 estruturas, em cada uma delas você realiza um processo para atingir os seguintes objetivos:</p>
                <Structures id="agendamento">
                    <p><b>1. Coluna de Luz:</b> Aumentar a energia vital e fazer com que ela circule pelo corpo, elevando a frequência do campo áurico.</p>
                    <p><b>2. Permissão:</b> Alinhar e deixar corpo e mente em harmonia.</p>
                    <p><b>3. Ação:</b> Aplicar um dos Fluxos do Aura Master de acordo com a necessidade no momento presente.</p>
                    <p><b>4. A Grande Conciliação:</b> Selar e acolher o processo de cura e transformação.</p>
                </Structures>
                <BoxWrapper>
                    <h3>Agendamento</h3>
                    <Box>
                        <p><b>Informações sobre o atendimento:</b></p>
                        <p>O atendimento dura entre 1h e 1h30min.</p>
                        <p>No horário marcado nos conectamos pelo Google Meet, para nos conhecermos e trabalharmos o melhor tratamento para você.<br />
                        O Link do Google Meet será enviado junto com a confirmação do seu agendamento.<br />
                        Em caso de dúvida sobre o link ou sobre o Google Meet é só entrar em contato comigo pelo <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>
                        <p>Reserve esse momento para você, certifique-se de que não será interrompida(o).</p>
                        <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!!</b></p>
                        
                        <Icon icon={faEllipsis} />
                        <p><b>Formas de pagamento:</b></p>
                        <p><b>PIX:</b> alineabp@gmail.com</p>
                        <p><b>PayPal (Para pagamentos internacionais):</b> alineabp@gmail.com</p>
                        <p><b>Cartão de Crédito/Parcelamento (Links para o Mercado Pago):</b><br />
                        <ArrowIcon icon={faArrowRight} /> <a href="https://mpago.la/1EPZBmM" target="_blank" rel="noreferrer" >1 sessão</a> - R$ 137,70<br />
                        <ArrowIcon icon={faArrowRight} /> <a href="https://mpago.la/2jMfVCL" target="_blank" rel="noreferrer" >4 sessões</a> - R$ 489,60<br />
                        <ArrowIcon icon={faArrowRight} /> <a href="https://mpago.la/1Va4Qbs" target="_blank" rel="noreferrer" >8 sessões</a> - R$ 856,80<br />
                        <ArrowIcon icon={faArrowRight} /> <a href="https://mpago.la/1TmfUfN" target="_blank" rel="noreferrer" >12 sessões</a> - R$ 1.101,60</p>
                        <p><b>TED/DOC:</b><br />
                        Aline Bastos Pinto<br />
                        Banco: Nubank - 0260<br />
                        Agência: 0001<br />
                        Conta: 85967030-2</p>
                        <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o WhatsApp: <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>

                        <ButtonLink href="https://calendly.com/alinebastos/agenda" target="_blank">Quero Agendar!</ButtonLink>
                    </Box>
                </BoxWrapper>
            </Main>
        </>
    );
}

export default AuraMaster;