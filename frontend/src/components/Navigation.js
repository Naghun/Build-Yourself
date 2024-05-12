import React, {useState} from "react";
import { Link } from 'react-router-dom'
import '../css/components/navigation.scss'
import Logo from '../assets/images/logo.png'


function Navigation() {
    const [active_link, set_is_active] = useState(null)
    const handle_click = (active_link) => {
        set_is_active(active_link);
    };
  return (
    <div className="container nav-starter">
        <div className='row navigation-row d-flex justify-content-center align-items-center'>
            <nav class="col-12 d-flex justify-content-center align-items-center navbar navbar-expand-md navigation-container">
                <Link to='/' onClick={() => handle_click('null')} className='navbar-brand col-4 d-flex justify-content-start align-items-center'>
                    <img src={Logo} alt="logo icon" className="nav-logo"/> Build Yourself
                </Link>
                <button class="navbar-toggler col-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse col-7" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto col-12 d-flex justify-content-end align-items-center">
                        <li class="nav-item">
                            <Link to='/exercise' onClick={() => handle_click('exercise')} className={`nav-link ${active_link === 'exercise' ? 'active' : ''}`}>Exercise</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/shop' onClick={() => handle_click('shop')} className={`nav-link ${active_link === 'shop' ? 'active' : ''}`}>Shop</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to='#' className='nav-link dropdown-toggle' id="navbarDropdown" 
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/exercise" className="dropdown-item">Exercise</Link>
                                <Link to="/Shop" className="dropdown-item">Shop</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navigation;
