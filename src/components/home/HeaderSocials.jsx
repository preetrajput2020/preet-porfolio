import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/preetrajput2020' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/preet-rajput-469165298/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://x.com/PreetRajput2020' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
