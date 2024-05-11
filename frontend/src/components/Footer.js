import React from "react";
import { Link } from 'react-router-dom'
import '../css/components/footer.scss'
import Logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  return (
    <div className="container">
        <div className='row footer-row d-flex justify-content-center align-items-center'>
            <div className="col-12 footer-container d-flex justify-content-center align-items-center">
                <Link to='/' className='col-1 d-flex justify-content-start align-items-center home-link'>
                    <img src={Logo} alt="logo icon" className="footer-logo"/>
                </Link>
                <div className="design-container col-3 d-flex flex-column justify-content-start align-items-center">
                    <h3 className="design col-12 d-flex justify-content-start align-items-center">Designed by: <span>Naghun</span></h3>
                    <h3 className="rights col-12 d-flex justify-content-start align-items-center">All rights reserved <span>@ 2024</span></h3>
                </div>
                <ul className="col-5 d-flex justify-content-center align-items-center footer-list">
                    <li className="col-4 list-item"><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li className="col-4 list-item"><Link to='/about'>About</Link></li>
                    <li className="col-4 list-item"><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className="col-3 d-flex justify-content-start align-items-center">
                    <FontAwesomeIcon icon={faLinkedin} className="col-4 linkedin"/>
                    <FontAwesomeIcon icon={faGithub} className="col-4 github"/>
                    <FontAwesomeIcon icon={faEnvelope} className="col-4 email"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
