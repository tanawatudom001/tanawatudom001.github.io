import React from 'react'
import './services.css'

function Servies() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        <article className="service">
          <div className="service__detalis">
            <h3>01</h3>
            <h4>Web design</h4>
          </div>
        </article>
        <article className="service">
          <div className="service__detalis">
            <h3>02</h3>
            <h4>Development</h4>
          </div>
        </article>
        <article className="service">
          <div className="service__detalis">
            <h3>03</h3>
            <h4>UX design</h4>
          </div>
        </article>
        <article className="service">
          <div className="service__detalis">
            <h3>04</h3>
            <h4>UI design</h4>
          </div>
        </article>
        <article className="service">
          <div className="service__detalis">
            <h3>05</h3>
            <h4>Full-Stack Development</h4>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Servies