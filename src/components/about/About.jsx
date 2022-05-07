import React from 'react'
import './about.css'
import me from '../../assets/about_me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div> 
          <h3>PERSONAL DETAIL</h3>
          <p>
          Birthdate-March 28th, 1999 <br />
          Gender-male <br />
          Nationality-Thai <br />
          Address-Khon Kaen, Thailand <br />
          GitHub-github.com/tanawatudom001 <br />
          My website-supatchareec.github.io/
          </p>
          <h3>EDUCATION HISTORY</h3>
          <p>
          2017 - 2022 <br />
          BACHELOR OF COMPUTER ENGINEERING <br />
          Khon Kaen University <br />
          Khon Kaen, Thailand
          </p>
          <p>
          2010 - 2016 <br />
          HIGH SCHOOL IN BANPHAI SCHOOL <br />
          District Banphai<br />
          Khon Kaen, Thailand
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about