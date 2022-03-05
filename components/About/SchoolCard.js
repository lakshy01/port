import React from 'react';

const SchoolCard = (props) => {
    return (
        <div className="item">
            <div className="content">
                <a className="header ee" style={{ color: "black", fontSize: '20px', fontWeight: 'bolder' }}>{props.item.title}</a>
                <br />
                <br />
                <div className="meta">
                    <span className="cinema" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.data}</span>
                </div>
                <br />
                <div className="description" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                    {props.item.description}
                </div>
                <br />
                <div className="extra">
                    <div className="ui label" style={{ fontSize: '20px', fontWeight: 'bolder' }}>{props.item.percentage}</div>
                </div>
            </div>
        </div>
    )
}

export default SchoolCard;