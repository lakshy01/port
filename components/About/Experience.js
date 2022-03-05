import React from 'react';
import { connect } from 'react-redux';
import Experience from '../../Experience';
import WorkCard from './WorkCard';
import ExperienceIcon from '../../images/ExperienceIcon.webp';

const Exp = (props) => {

    const work = Experience;
    const show = props.isClicked.isClicked ? 'none' : 'block';
    const renderList = () => {
        return work.map((item) => {
            return <WorkCard item={item} key={item.id} />
        })
    }

    return (
        <div className="ui container" style={{ display: `${show}` }}>
            <h2 className="ui header">
                <img className="ui image" src={ExperienceIcon} />
                <div className="content mee">
                    Experience
                </div>
            </h2>
            <br />
            <br />
            <div className="ui divided items">
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isClicked: state.ham
    };
}


export default connect(mapStateToProps)(Exp);