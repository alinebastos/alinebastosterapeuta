import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
    margin: 10px auto 30px;
    display: block;
    color: #bd0003;
`

function PaymentInfo (props) {
    return (
        <>
            <Icon icon={faEllipsis} />
            <p><b>Informações sobre o valor e as formas de pagamento:</b></p>
            <p><b>Valor: </b>R$ {props.price},00 {props.info}</p>
            <p><b>Formas de pagamento</b></p>
            <p><b>PIX:</b> alineabp@gmail.com</p>
            <p><b>PayPal (Para pagamentos internacionais):</b> alineabp@gmail.com</p>
            <p><b>Cartão de Crédito (Parcelamento): </b><a href="https://mpago.la/111hYP8" target="_blank" rel="noreferrer" >Link para o Mercado Pago</a></p>
            <p><b>TED/DOC:</b><br />
            Aline Bastos Pinto<br />
            Banco: Nubank - 0260<br />
            Agência: 0001<br />
            Conta: 85967030-2</p>
            <p>O pagamento e o envio do comprovante devem ser feitos em até 24 horas antes da consulta para o WhatsApp: <a href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer">(51) 98301-1098</a>.</p>
        </>
    )
}

export default PaymentInfo;
