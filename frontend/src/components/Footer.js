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
    <div className="container footer-starter">
        <div className='row footer-row d-flex justify-content-center align-items-center'>
            <div className="col-12 footer-container d-flex justify-content-center align-items-center">
                <Link to='/' className='col-1 home-link'>
                    <img src={Logo} alt="logo icon" className="footer-logo"/>
                </Link>
                <div className="design-container col-5">
                    <h3 className="design col-12 p-0 m-0">Designed by: <span>Naghun</span></h3>
                    <h3 className="rights col-12 p-0 m-0">All rights reserved <span>- 2024</span></h3>
                </div>
                <ul className="col-4 footer-list">
                    <li className="col-4 list-item"><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li className="col-4 list-item"><Link to='/about'>About</Link></li>
                    <li className="col-4 list-item"><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className="col-2 footer-icons">
                    <FontAwesomeIcon icon={faLinkedin} className="icon linkedin col-1"/>
                    <FontAwesomeIcon icon={faGithub} className="icon github col-1"/>
                    <FontAwesomeIcon icon={faEnvelope} className=" icon email col-1"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
