import React from 'react';
import { connect } from 'react-redux';

import './Style.css';

const Center = (props) => {
    const disp = props.isClicked.isClicked ? 'none' : 'block';
    return (
        <div className="ui relaxed grid tee" id="section3" style={{ display: `${disp}`, transition: 'all 10s ease-out;' }}>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="eight wide column"></div>
            <div className="three column row">
                <div className="column"></div>
                <div className="column">
                    <div>
                        <h1 className="head first">Hello,I'm Lakshy Rastogi.</h1>
                        <h4 className="head first">I'm a full-stack web developer.</h4>
                        <div className="ui relaxed grid">
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                            <div className="eight wide column"></div>
                        </div>
                        <ul className="deck second">
                            <li className="deck__item deck__item--facebook">
                                <a className="deck__link" href="#">
                                    <span className="deck__icon fontawesome-facebook" />
                                    <i className="deck__icon fontawesome-google-plus fa fa-facebook"></i>
                                    <span className="deck__label">Facebook</span>
                                </a>
                            </li>
                            <li className="deck__item deck__item--github">
                                <a className="deck__link" href="#">
                                    <span className="deck__icon fontawesome-github" />
                                    <i className="deck__icon fontawesome-google-plus fa fa-github"></i>
                                    <span className="deck__label">GitHub</span>
                                </a>
                            </li>
                            <li className="deck__item deck__item--twitter">
                                <a className="deck__link" href="#">
                                    <span className="deck__icon fontawesome-twitter" />
                                    <i className="deck__icon fontawesome-google-plus fa fa-twitter"></i>
                                    <span className="deck__label">Twitter</span>
                                </a>
                            </li>
                            <li className="deck__item deck__item--linkedin">
                                <a className="deck__link" href="#">
                                    <span className="deck__icon fontawesome-linkedin" />
                                    <i className="deck__icon fontawesome-google-plus fa fa-linkedin"></i>
                                    <span className="deck__label">LinkedIn</span>
                                </a>
                            </li>
                            <li className="deck__item deck__item--googleplus">
                                <a className="deck__link" href="#">
                                    <span className="deck__icon fontawesome-google-plus" />
                                    <i className="deck__icon fontawesome-google-plus fa fa-google-plus"></i>
                                    <span className="deck__label">Google+</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(Center);