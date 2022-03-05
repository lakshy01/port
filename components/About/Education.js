import React from 'react';
import { connect } from 'react-redux';
import { isCollege, isHigh, isSenior } from '../../actions';
import Senior from './Senior';
import High from './High';
import College from './College';
import Edu from '../../images/Edu.png';

const Education = (props) => {

    let disp = props.edu.edu;
    console.log(disp);
    let viewCollege = '';
    let viewHigh = '';
    let viewSenior = '';

    if (disp === 'college') {
        viewCollege = 'active';
        viewHigh = '';
        viewSenior = '';
    } else if (disp === 'high') {
        viewHigh = 'active';
        viewCollege = '';
        viewSenior = '';
    } else if (disp === 'senior') {
        viewSenior = 'active';
        viewCollege = '';
        viewHigh = '';
    }

    const renderList = () => {
        if (disp === 'college') {
            return <College />
        } else if (disp === 'high') {
            return <High />
        } else if (disp === 'senior') {
            return <Senior />
        }
    }

    const show = props.isClicked.isClicked ? 'none' : 'block';

    return (
        <div className="ui container" id="section2" style={{ display: `${show}` }}>
            <h2 className="ui header">
                <img className="ui image" src={Edu} />
                <div className="content mee">
                    Education
                    </div>
            </h2>
            <br />
            <br />
            <div className="ui top attached tabular menu">
                <a className={`${viewCollege} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isCollege() }}> College </a>
                <a className={`${viewHigh} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isHigh() }}>High School</a>
                <a className={`${viewSenior} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isSenior() }}>Senior School</a>
            </div>
            <div className="ui bottom attached segment">
                {renderList()}
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        edu: state.edu,
        isClicked: state.ham
    };
}

export default connect(mapStateToProps, { isCollege, isHigh, isSenior })(Education);