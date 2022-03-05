import React from 'react';
import './Style.css';

const Card = (props) => {
    return (
        <div className="item">
            <div className="image">
                <img src={props.item.imgSrc} alt="images"></img>
            </div>
            <div className="content">
                <a className="header ee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.title}</a>
                <br />
                <br />
                <div className="meta">
                    <span className="cinema" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.stack}</span>
                </div>
                <br />
                <div className="description" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                    {props.item.description}
                </div>
                <br />
                <div className="extra">
                    <div className="ui right floated primary button" style={{ background: "black" }}>
                        <a href={props.item.link} style={{ color: "white", fontSize: '20px', fontWeight: 'bolder' }}>Check Out</a>
                        <i className="right chevron icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;