import React from 'react'
import './portfolio.css'
import line1 from '../../assets/portfolio_line.PNG'
import line2 from '../../assets/portfolio_line-2.PNG'
import video from '../../assets/portfolio_video.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Last Works/Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <h3>FULL-LINEBOT-PROGRAM</h3>
          <div className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={line1} alt="Line1" />
              <img src={line2} alt="Line2" />
            </div>
            <p>Design and develop a line bot system Developed with Node Js Sync data with MySQL server Show data collection in the form of a website developed with ejs used for web development in node JS. <br /> Principle of doing, Users have to select the menu to do various errands in the Line app will display information with the web Able to collect data and display data. There is an api system sent to the company's main software to collect everything.</p>
          </div>
        </article>
        <article className='portfolio__items'>
          <h3>SYSTEM LIVE STREAM VIDEO</h3>
          <div className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={video} alt="Video" />
            </div>
            <p>Develop a video stream of cctv cameras using a realtime wifi system, just connect to wifi, develop with javascript. </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio