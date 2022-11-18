import styled from 'styled-components';
import Accordion from '../../components/Accordion';

const Wrapper = styled.div`
    max-width: 1024px;
    background-color: #fff;
    border: 1px solid #5b5b5b;
    padding: 0 20px 20px;
    margin: 50px auto;
`

function FaqApometriaCosmica() {    
    return (
        <>
            <h2>
                Curso Apometria Cósmica e Dinâmica<br />
                Perguntas e Respostas
            </h2>
            <Wrapper>
                <h3>Material</h3>
                <Accordion
                    title="Qual o melhor material para imprimir a interface?"
                    content="Existem várias opções, as mais resistentes e mais usadas são: em papel foto plastificado, em material de ímã e em PVC.<br />
                    Se for enviar para uma gráfica, prefira enviar por e-mail, pois o whatsapp diminui a qualidade do arquivo."
                />
                <Accordion
                    title="Qual pêndulo eu compro?"
                    content="Existem alguns tipo de materiais: madeira, metal e cristal.<br />
                    O pêndulo nos escolhe, tem uma dica de como fazer isso quando a compra é presencial: Posicione o pêndulo acima da sua mão, se ele girar ele te escolheu, e quanto mais rápido ele girar mais forte é a conexão.<br />
                    Pode experimentar vários pêndulos até encontrar o que te escolheu.<br />
                    Sobre o material do pêndulo, não tem melhor ou pior, tem o que ressoa com o seu coração."
                />
                <h3>Curso</h3>
                <Accordion
                    title="O curso ficará gravado?"
                    content="
                    Sim, o curso ficará gravado na plataforma Hotmart.
                    "
                />
                {/* 
                <div className="accordionItem">
                    <AccordionTitle className="accordionTitle">• Qual pêndulo é melhor?</AccordionTitle>
                    <div className="accordionContent">
                        <p>Existem alguns tipo de materiais: madeira, metal e cristal.<br />
                        O pêndulo nos escolhe, tem uma dica de como fazer isso quando a compra é presencial: Posicione o pêndulo acima da sua mão, se ele girar ele te escolheu, e quanto mais rápido ele girar mais forte é a conexão.<br />
                        Pode experimentar vários pêndulos até encontrar o que te escolheu.<br />
                        Sobre o material do pêndulo, não tem melhor ou pior, tem o que ressoa com o seu coração.</p>
                    </div>
                </div> */}
            </Wrapper>
        </>
    )
}

export default FaqApometriaCosmica;