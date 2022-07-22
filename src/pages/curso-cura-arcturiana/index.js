import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
    max-width: 1920px;
    height: 500px;
    margin: -60px auto 50px;
    background-image: url('arcturians.jpg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        background: rgba(94, 23, 235, 0.70) none repeat scroll 0 0;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
    }

    @media screen and (min-width: 767px) {
        margin: -80px auto 50px;
    }
`

const Title = styled.h1`
    font-size: 40px;
    line-height: 50px;

    @media screen and (min-width: 768px) {
        font-size: 60px;
        line-height: 65px;
    }

    .subtitle {
        font-size: 20px;
        line-height: 30px;
        font-weight: 600;
        display: block;
        margin: 0 auto;
        margin-top: 20px;

        @media screen and (min-width: 768px) {
            font-size: 30px;
            line-height: 40px;
        }

        @media screen and (min-width: 1280px) {
            width: 60%;
            margin-top: 30px;
        }
    }

    .modules {
        font-weight: 400;
    }

    @media screen and (min-width: 1280px) {
        width: 90%;
    }
`

const Main = styled.main`
    max-width: 1024px;
    padding: 0 10px;
    margin: 0 auto;

    h2,
    h3 {
        color: #5E17EB;
    }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin: 10px auto 30px;
    display: block;
    color: #5E17EB;
`

const ListWrapper = styled.div`
    margin-bottom: 40px;
`

const List = styled.ul`
    li {
        padding-left: 28px;
        background: url('check-blue.png') no-repeat center left;
        font-size: 15px;
    }
`

const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: #bd0003;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: 0px 0px 4px rgba(0,0,0,0.9);
    font-size: 20px;
    line-height: 50px;

    @media screen and (min-width: 768px) {
        padding: 10px 30px;
        font-size: 30px;
    }

    &:hover {
        background-color: #5E17EB;
    }
`

function CursoCuraArcturiana() {
    return (
        <>
            <Header>
                <Title>Formação no Sistema Arcturiano de Cura Multidimensional<br />
                <span className="subtitle">Aprenda a identificar e tratar as energias que nos colocam em conflito, desequilíbrio e desarmonia, causando problemas na alma, mente, corpos e emoções.</span>
                <span className="subtitle modules">Módulos 1, 2, 3 e 4 (Mestrado)</span></Title>
            </Header>
            <Main>
                <div style={{textAlign: 'center'}}>
                    <Button>Quero garantir a minha vaga!</Button>
                    <h3 style={{fontWeight: '700', fontSize: '22px'}}>VAGAS LIMITADAS!</h3>
                </div>
                <Icon icon={faEllipsis} />
                <h2>Quem são os Arcturianos?</h2>
                <p>Os Arcturianos são uma civilização de quinta dimensão. Sua energia ancora e trabalha na cura emocional, mental e espiritual para a humanidade. Eles trabalham com os seres confederados, ajudando os humanos a se sintonizar com as frequências da 5ª dimensão no planeta Terra.</p>
                <h2>O que é a Cura Multidimensional Arcturiana?</h2>
                <p>A Cura Multidimensional Arcturiana é uma terapia unificada no amor incondicional. Este Sistema trata de curar os problemas da alma, mente, corpos e emoções.</p>
                <p>Todos possuem problemas nessas áreas, que surgem diariamente na vida, criando tristeza, desconforto, bloqueios, angústia e depressão. Toda e qualquer infelicidade e dor, instalam-se literalmente na nossa vida (eventualmente somatizando dores no nosso corpo físico) impedindo a nossa realização total como seres divinos que somos e criando os mais diversos obstáculos que nos impedem de andar com a vida para a frente.</p>
                <h3>As potencialidades do Sistema Arcturiano de Cura Multidimensional são ilimitadas, como por exemplo:</h3>
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
            </Main>
        </>
    )
}

export default CursoCuraArcturiana;