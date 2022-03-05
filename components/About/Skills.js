import React from 'react';
import { connect } from 'react-redux';
import skills from '../../images/skills.png';
import SkillPie from './SkillPie';
import SkillData from '../../SkillsData';

const Skills = (props) => {

    const disp = props.isClicked.isClicked ? 'none' : 'block';

    const renderList = () => {
        return SkillData.map((skill) => {
            return <SkillPie deg={skill.deg} title={skill.title} key={skill.title} marg={skill.marg} />
        })
    };

    return (
        <div className="ui container" style={{ display: `${disp}` }}>
            <h2 className="ui header">
                <img className="ui image" src={skills} />
                <div className="content hee">
                    Skills
                </div>
            </h2>
            <div className="ui divided items">
                {renderList()}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(Skills);