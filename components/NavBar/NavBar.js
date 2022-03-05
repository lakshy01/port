import React from 'react';
import { connect } from 'react-redux';
import { isClicked } from '../../actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Style.css';

const NavBar = (props) => {

    const helper = () => {
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            const navLinks = document.querySelector('.nav-links1');
            const links = document.querySelectorAll(".nav-links1 .links1");
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
            });
            props.isClicked();
        }
    }

    return (
        <Router>
            <nav>
                <div className="hamburger" onClick={() => helper()}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <ul className="nav-links1">
                    <li className="links1"><a className="anchor1" href="#section2" onClick={() => helper()}>About</a></li>
                    <li className="links1"><a className="anchor1" href="#section3" onClick={() => helper()}>Contact</a></li>
                    <li className="links1"><a className="anchor1" href="#section1" onClick={() => helper()}>Projects</a></li>
                </ul>
            </nav>
        </Router>

    )
};

export default connect(null, { isClicked })(NavBar);