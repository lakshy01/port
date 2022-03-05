import React from 'react';

const WorkCard = (props) => {
    return (
        <div className="item">
            <div className="image">
                <img src={props.item.imgSrc} />
            </div>
            <div className="content">
                <a className="header ee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.title}</a>
                <br />
                <div className="meta">
                    <span className="cinema" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.date}</span>
                </div>
                <br />
                <div className="description">
                    <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.description}</p>
                </div>
                <br />
                <div className="extra">
                    <div className="ui label" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.stack1}</div>
                    <div className="ui label" style={{ fontSize: '20px', fontWeight: 'bolder' }}> {props.item.stack2}</div>
                </div>
            </div>
        </div>
    )
};

export default WorkCard;