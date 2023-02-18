import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Depoimento01 from './depoimentos/Depoimento01.png';
import Depoimento02 from './depoimentos/Depoimento02.png';
import Depoimento03 from './depoimentos/Depoimento03.png';
import Depoimento04 from './depoimentos/Depoimento04.png';
import Depoimento05 from './depoimentos/Depoimento05.png';

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
        margin 0 auto 30px;
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

const Description = styled.div`
    text-align: center;
    
    @media screen and (min-width: 767px) {
        width: 70%;
        margin 0 auto;
    }
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

function AuraMaster () {
    return (
        <>
            <Header id="up">       
                <h1>Aura Master</h1>
            </Header>
            <Main>
                <Description>
                    <h2>O que é Aura Master?</h2>
                    <h3>Aura Master é uma Técnica de Alívio Imediato!</h3>

                    <p>Quando a técnica terapêutica Aura Master é aplicada, ela vai direto ao inconsciente e faz a limpeza que precisa fazer.</p>

                    <p>Ela edita a sua memória e apaga aquilo que está ali só para te fazer mal.</p>

                    <p>Tudo o que hoje tem uma trava na sua vida pode ter uma relação com alguma coisa que você carrega, não faz parte de você e precisa abrir espaço para dar lugar à sua essência.</p>
                    <p>O Método Aura Master pode ajudar você, pessoas da sua família e amigos a:</p><br />
                </Description>
                <ListWrapper>
                    <List>
                        <li>Enfrentar os medos</li>
                        <li>Destravar a prosperidade e gerar riqueza</li>
                        <li>Ter soluções instantâneas para problemas difíceis</li>
                        <li>Elevar a vibração e energia vital de forma imediata</li>
                        <li>Curar relacionamentos</li>
                        <li>Aumentar a autoestima</li>
                        <li>Mudar de carreira de forma equilibrada</li>
                        <li>Tratar fobias</li>
                        <li>Tratar depressão, crises de ansiedade e síndrome do pânico</li>
                        <li>Vencer o medo de falar em público</li>
                        <li>Perder a timidez</li>
                        <li>Superar o sentimento de rejeição</li>
                        <li>Limpar memórias negativas do passado</li>
                        <li>Perdoar com facilidade</li>
                        <li>Desenvolver disciplina e persistência</li>
                        <li>Acabar com a preguiça e a procrastinação</li>
                        <li>Superar separação conjugal com harmonia</li>
                        <li>Resolver conflitos familiares entre pais, filhos e cônjuges</li>
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
                        <li>Despertar a criatividade e a inovação</li>
                        <li>Curar ou aliviar crises alérgicas</li>
                        <li>Tratar desvios de humor e crises de raiva</li>
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
                        <p><b>Informações sobre o atendimento:</b></p>
                        <p>O atendimento dura entre 1h e 1h30min.</p>
                        <p>No horário marcado nos conectamos pelo Google Meet, para nos conhecermos e trabalharmos o melhor tratamento para você.<br />
                        O Link do Google Meet será enviado junto com a confirmação do seu agendamento.<br />
                        Em caso de dúvida sobre o link ou sobre o Google Meet é só entrar em contato comigo pelo <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>
                        <p>Reserve esse momento para você, certifique-se de que não será interrompida(o).</p>
                        <p><b>Lembre-se: o terapeuta é apenas um facilitador, você é responsável pelo seu processo!</b></p>
                        
                        <Icon icon={faEllipsis} />
                        <p><b>Valor Promocional da Sessão:</b> R$ 95,00</p>
                        <p><b><u>Formas de pagamento</u></b></p>
                        <p><b>PIX:</b> alineabp@gmail.com</p>
                        <p><b>PayPal (Para pagamentos internacionais):</b> alineabp@gmail.com</p>
                        <p><b>Cartão de Crédito/Parcelamento:</b> <a href="https://mpago.la/2aimjNV" target="_blank" rel="noreferrer" >Link para o Mercado Pago</a><br /></p>
                        <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">WhatsApp</a>.</p>

                        <ButtonLink href="https://calendly.com/alinebastos/agenda" target="_blank">Quero Agendar!</ButtonLink>
                    </Box>
                </BoxWrapper>
            </Main>
            <Icon icon={faEllipsis} />
            <h2>Depoimentos de alguns clientes:</h2>
            <Testimonies>
                <Testimony>
                    <p>16 de Fevereiro de 2023</p>
                    <img src={Depoimento05} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>11 de Fevereiro de 2023</p>
                    <img src={Depoimento04} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>22 de Janeiro de 2023</p>
                    <img src={Depoimento03} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>19 de Janeiro de 2023</p>
                    <img src={Depoimento02} alt="Depoimento" />
                </Testimony>
                <Testimony>
                    <p>11 de Janeiro de 2023</p>
                    <img src={Depoimento01} alt="Depoimento" />
                </Testimony>
            </Testimonies>
        </>
    );
}

export default AuraMaster;