import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from'react-icons/fa'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tanawat-udom-279a96239/" ><BsLinkedin /></a>
        <a href="https://github.com/tanawatudom001" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials