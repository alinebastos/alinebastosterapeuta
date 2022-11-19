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
    padding: 0.5em 1.5em;
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
                <h3>Material</h3>
                <Accordion title="Qual o melhor material para imprimir a interface?">
                    Existem várias opções, as mais resistentes e mais usadas são: em papel foto plastificado, em material de ímã e em PVC.<br />
                    Se for enviar para uma gráfica, prefira enviar por e-mail, pois o whatsapp diminui a qualidade do arquivo.
                </Accordion>
                <Accordion title="Qual o melhor tamanho para imprimir a interface?">
                    Sugerimos imprimir em A3, mas não tem problema imprimir em outro tamanho se ficar legível e com espaço para isar o pêndulo no relógio da interface.
                </Accordion>
                <Accordion title="Qual pêndulo eu compro?">
                    Existem alguns tipo de materiais: madeira, metal e cristal.<br />
                    O pêndulo nos escolhe, tem uma dica de como fazer isso quando a compra é presencial: Posicione o pêndulo acima da sua mão, se ele girar ele te escolheu, e quanto mais rápido ele girar mais forte é a conexão.<br />
                    Pode experimentar vários pêndulos até encontrar o que te escolheu.<br />
                    Sobre o material do pêndulo, não tem melhor ou pior, tem o que ressoa com você.
                </Accordion>
                <h3>Curso</h3>
                <Accordion title="O curso ficará gravado?">
                    Sim, o curso ficará gravado e disponibilizado na plataforma Hotmart.
                </Accordion>
            </Wrapper>
        </>
    )
}

export default FaqApometriaCosmica;