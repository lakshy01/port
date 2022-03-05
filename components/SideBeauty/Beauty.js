import React from 'react';
import { connect } from 'react-redux';
import './Style.css';

const Beauty = (props) => {
    const disp = props.isClicked.isClicked ? 'none' : 'block';
    return (
        <div id="platform" style={{ display: `${disp}` }} style={{ float: 'right' }}>
            <div className="guy walk">
                <div className="head">
                    <b style={{ transform: "rotateX(60deg) rotateY(60deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(60deg) rotateY(120deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(60deg) rotateY(180deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(60deg) rotateY(240deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(60deg) rotateY(300deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(60deg) rotateY(360deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(60deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(120deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(180deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(240deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(300deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(120deg) rotateY(360deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(60deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(120deg) translateZ(8.5vw)" }}></b>
                    <b className="front-face" style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(240deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(300deg) translateZ(8.5vw)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(8.5vw)" }}></b>
                </div>
                <div className="body">
                    <b style={{ transform: "rotateX(90deg) rotateY(90deg) translateZ(0.5em)" }}></b>
                    <b style={{ transform: "rotateX(90deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                    <b style={{ transform: "rotateX(90deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(270deg) translateZ(0.5em)" }}></b>
                    <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(0.5em)" }}></b>

                    <div className="rightArm">
                        <b style={{ transform: "rotateX(90deg) rotateY(90deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(270deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                    </div>
                    <div className="leftArm">
                        <b style={{ transform: "rotateX(90deg) rotateY(90deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(270deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                    </div>
                    <div className="rightLeg">
                        <b style={{ transform: "rotateX(90deg) rotateY(90deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(270deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                    </div>
                    <div className="leftLeg">
                        <b style={{ transform: "rotateX(90deg) rotateY(90deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(90deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(180deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(270deg) translateZ(0.5em)" }}></b>
                        <b style={{ transform: "rotateX(180deg) rotateY(360deg) translateZ(0.5em)" }}></b>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(Beauty);