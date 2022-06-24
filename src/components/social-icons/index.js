import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const IconLink = styled.a`
    margin-left: 10px;
    height: 20px;
            
    &:first-of-type {        
        margin-left: 0;
    }
`

const Icon = styled(FontAwesomeIcon)`
    font-size: 20px;
    transition: all 0.5s ease 0s;
    line-height: 14px;
`

function SocialIcons () {
    return (
        <section>
            <IconLink href='https://api.whatsapp.com/send?phone=5551983011098' target="_blank" rel="noreferrer"><Icon icon={faWhatsapp} /></IconLink>
            <IconLink href="mailto:alinebastosterapeuta@gmail.com" target="blank"><Icon icon={faEnvelope} /></IconLink>
            <IconLink href="https://www.instagram.com/alinebastosterapeuta/" target="_blank"><Icon icon={faInstagram} /></IconLink>
            {/* <a href="https://www.instagram.com/alynebastoss/" target="_blank"><Icon icon={faYoutube} /></a> */}
        </section>
    );
}

export default SocialIcons;
