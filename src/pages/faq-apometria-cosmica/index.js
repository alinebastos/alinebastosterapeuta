import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
    max-width: 1024px;
    background-color: #fff;
    border: 1px solid #5b5b5b;
    padding: 0 20px 20px;
    margin: 50px auto;
`

const AccordionItem = styled.div`
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;

    &.collapsed {
        max-height: 0;
        transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
    }
`

const AccordionTitle = styled.div`
    font-weight: 600;
    cursor: pointer;
    color: #666;
    padding: 1em 1.5em;
    border: solid 1px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2px 0;
    background-color: #eee;

    &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
    }
    
    &:hover,
    &.open {
        color: black;
        background-color: #ccc;
    }
    
    &.open {
        &::after {
            content: "";
            border-top: 0;
            border-bottom: 5px solid;
        }
    }
`

const AccordionContent = styled.div`
    padding: 1em 1.5em;
`

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>        
            <AccordionTitle
            className={`accordion-title ${isOpen ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
            >
            {title}
            </AccordionTitle>
            <AccordionItem className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
            <AccordionContent className="accordion-content">{children}</AccordionContent>
            </AccordionItem>
        </>
    );
};

function FaqApometriaCosmica() {    
    return (
        <>
            <h2>
                Curso Apometria Cósmica e Dinâmica<br />
                Perguntas e Respostas
            </h2>
            <Wrapper>
                <h3>Materiais</h3>
                <Accordion title="Qual o melhor material para imprimir a interface?">
                    Existem várias opções, as mais resistentes e mais usadas são: em papel foto plastificado, em material de ímã e em PVC.<br />
                    Se for enviar para uma gráfica, prefira enviar por e-mail, pois o whatsapp diminui a qualidade do arquivo.
                </Accordion>
                <Accordion title="Qual o melhor tamanho para imprimir a interface?">
                    Sugerimos imprimir em A3, mas não tem problema imprimir em outro tamanho se ficar legível e com espaço para usar o pêndulo no relógio da interface.
                </Accordion>
                <Accordion title="Qual pêndulo eu compro?">
                    Existem alguns tipo de materiais: madeira, metal e cristal.<br />
                    O pêndulo nos escolhe, tem uma dica de como fazer isso quando a compra é presencial: Posicione o pêndulo acima da sua mão, se ele girar ele te escolheu, e quanto mais rápido ele girar mais forte é a conexão.<br />
                    Pode experimentar vários pêndulos até encontrar o que te escolheu.<br />
                    Sobre o material do pêndulo, não tem melhor ou pior, tem o que ressoa com você.
                </Accordion>
                <Accordion title="Quais cristais são indicados para colocar em cada chakra na interface?">
                    Não tem necessidade de ser o cristal do chakra, pode ser o que você tem e sentir.<br />
                    Em lojas de artigos esotéricos é muito comum achar kits prontos com as pedras dos 7 chakras.<br />
                    Caso queira comprar separado, ou por curiosidade, aqui vão alguns exemplos:<br />
                    1º Chakra: Jaspe vermelho, turmalina negra, ágata vermelha, granada ou obsidiana;<br />
                    2º Chakra: Calcita laranja, ágata de fogo, jaspe madeira, cornalina e coral;<br />
                    3º Chakra: Âmbar, ouro, calcita amarela, olho de tigre e topázio imperial;<br />
                    4º Chakra: Turmalina melancia, quartzo verde, quartzo rosa, amazonita, jade, musgo e esmeralda;<br />
                    5º Chakra: Turquesa, água marinha e quartzo azul;<br />
                    6º Chakra: Lápis lazuli, safira azul e azurita;<br />
                    7º Chakra: Angelita, ametista, quartzo branco e topázio incolor.
                </Accordion>
                <h3>Curso</h3>
                <Accordion title="O curso ficará gravado?">
                    Sim, o curso ficará gravado e disponibilizado na plataforma Hotmart.
                </Accordion>
                <h3>Apometria</h3>
                <Accordion title="Em que momento utilizaremos o comando ventor solar? Seria quando a mesa apontar para energia telurica ou bases astrais?">
                    Sim, nesses momentos.
                </Accordion>
                <Accordion title="A Apometria pode ser feita para pets?">
                    Sim, pode.
                </Accordion>
                <Accordion title="Quando mostra que precisa de cromoterapia, devemos fazer o comando?">
                    Sim, pode fazer o comando.
                </Accordion>
                <Accordion title="Pode acontecer de não precisar ir para o hospital?">
                    É raro, mas pode acontecer.
                </Accordion>
                <Accordion title="Sobre implantes negativos, podem estar atuando nos chakras e nos corpos sutis?">
                    Sim, pode ter implantes tanto chakras quantos nos corpos sutis.
                </Accordion>
                <Accordion title="Existe implante no corpo físico?">
                    Existe, mas não é tão comum. A apometria trata especificamente dos implantes negativos nos corpos sutis, mesmo quando falamos em locais específicos, também é a nível energético.
                </Accordion>
                <Accordion title="Qual a melhor forma de fazer o retorno do atendimento?">
                    Existem algumas formas:<br />
                    Você pode ir anotando tudo na ficha de atendimento e depois relatar esses resultados em um áudio.<br />
                    Você pode fazer diversos áudios curtos, com um tema por áudio, por exemplo: Áudio com as verificações do Hospital do astral, outro áudio com as verificações dos contratos, etc.
                    Você também pode ir gravando o áudio durante o atendimento, pausando enquanto estiver fazendo as verificações e descrevendo no audio somente o resultado de cada verificação.
                </Accordion>
                <Accordion title="Para complementar as informações posso usar outras técnicas que já utilizo, como radiestesia ou registros akáshicos?">
                    Pode sim, você pode integrar outras técnicas com a apometria, por isso  o "Dinâmica" no nome.
                </Accordion>
                <Accordion title="Quando aparecer um obsessor encarnado ou desencarnado, e mostrar que não pode ser encaminhado, como proceder?">
                    Sugerimos que você utilize o comando de harmonização. Tem casos em que não é permitido encaminhar pois o assistido está muito conectado com o obsessor, fazer essa ruptura pode prejudicar o assistido.
                </Accordion>
                <Accordion title="É normal ficar mais disposta, com mais energia, quando a gente faz a apometria para outras pessoas?">
                    Sim, é normal, pois você vai recebendo junto "coisas" necessárias a você.
                </Accordion>
                <Accordion title="Quando a gente faz pra gente, dizemos nosso nome ou falamos 'para mim'? Faz diferença?">
                    Pode falar como se sentir melhor.
                </Accordion>
            </Wrapper>
        </>
    )
}

export default FaqApometriaCosmica;