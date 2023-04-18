import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-content">
        <ul className="links">
            <li className="links-item">
               <a href="mailto: prineafelix@gmail.com">
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
               </a>
            </li>
            <li className="links-item">
                <a href="https://www.linkedin.com/in/prince-adrianne-felix-84438b231/" target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
            </li>
            <li className="links-item">
                <a href="https://github.com/PrinceAFelix" target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
            </li>

            <li className="links-item">
                <a href="https://www.instagram.com/prince_afelix/" target="_blank">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
            </li>
        </ul>
    </div>
    <div className="copyright center">
        <span>Prince Felix &#169; 2022</span>
    </div>
</div>
  )
}
