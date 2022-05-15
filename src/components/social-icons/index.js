import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
    margin-left: 15px;
    transition: all 0.5s ease 0s;
    line-height: 14px;
`

function SocialIcons () {
    return (
        <section>
            <a href='https://api.whatsapp.com/send?phone=5551983011098'><Icon style={{ marginLeft: 0}} icon={faWhatsapp} /></a>
            <a href="mailto:alinebastosterapeuta@gmail.com"><Icon icon={faEnvelope} /></a>
            <a href="https://www.instagram.com/alynebastossterapeuta/"><Icon icon={faInstagram} /></a>
            {/* <a href="https://www.instagram.com/alynebastoss/"><Icon icon={faYoutube} /></a> */}
        </section>
    );
}

export default SocialIcons;
