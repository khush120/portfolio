import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/khushbu-yadav-213b21209/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/khush120/" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials