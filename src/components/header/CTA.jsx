import React from 'react'
import CV from '../../assets/cv.pdf'
import RS from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href='https://drive.google.com/drive/folders/1eQZ3z1Yj10RtjNsOZGLuMOBAOUDnDUfv?usp=sharing' target='_blank' className='btn'>Download Resume</a>
        <a href='https://drive.google.com/drive/folders/1KTHSSb4wERc7Jjc9oDv_R3MWI1PSdaXq?usp=sharing' target='_blank' className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA