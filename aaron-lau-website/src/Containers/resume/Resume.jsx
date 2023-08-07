import React from 'react'
import './resume.scss'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Resume = () => {
  return (
    <div className='links'>
      <a href='https://www.linkedin.com/in/aaronlau-uic/'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/aalau'>
        <FaGithub/>
    </a>
    </div>
  )
}

export default Resume