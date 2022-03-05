import React from 'react';
import './Style.css';

const SkillPie = (props) => {
    return (
        <div className={`pie-wrapper progress-${props.deg} style-2`}>
            <span className="label">{props.deg}<span className="smaller">%</span></span>
            <div className="pie">
                <div className="left-side half-circle"></div>
                <div className="right-side half-circle"></div>
            </div>
            <div className="shadow"></div>
            <h6 className="nee" style={{ marginLeft: props.marg }}>{props.title}</h6>
        </div>
    )
}

export default SkillPie;