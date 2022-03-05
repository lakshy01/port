
import React from 'react';
import { connect } from 'react-redux';
import skills from '../images/skills.png';
import './Style.css';

const Check = (props) => {

    const disp = props.isClicked.isClicked ? 'none' : 'block';

    return (
        <section className="section" style={{ display: `${disp}` }}>
            <div className="wall">
                <div className="v-boxes">
                    <div className="box">
                        <span className="tooltip">CSS</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa fa-css3-alt"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">JavaScript</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa-js-square"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">HTML</span>
                        <div className="box-face">
                            <div className="box-text">
                                <img src="https://bulma.io/favicons/favicon-32x32.png?v=201701041855" alt="" />
                            </div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">React</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa fa-vuejs"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i classNae="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="v-boxes second">
                    <div className="box">
                        <span className="tooltip">Photoshop</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa-php"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">Bootstrap</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa-laravel"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">NodeJs</span>
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa-node-js"></i></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="v-boxes third">
                    <div className="box">
                        <span className="tooltip">MongoDB</span>
                        <div className="box-face">
                            <div className="box-text">
                                <img src="https://electronjs.org/images/favicon.ico" alt="" />
                            </div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <span className="tooltip">RESTfullwebservice</span>
                        <div className="box-face">
                            <div className="box-text"><img src="https://vue-native.io/images/logo.png" alt="" /></div>
                        </div>
                        <div className="box-back">
                            <div className="box-text">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fas fa fa-star-half-alt"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="v-boxes forth">
                    <div className="box link">
                        <div className="box-face">
                            <div className="box-text"><i className="fab fa fa-github-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(Check);