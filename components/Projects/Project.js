import React from 'react';
import { connect } from 'react-redux';
import { isFull, isFront, isBack } from '../../actions';
import Front from './Front';
import Back from './Back';
import Full from './Full';
import Proj from '../../images/Proj.png';

const Project = (props) => {

    let disp = props.section.section;
    let viewFull = '';
    let viewFront = '';
    let viewBack = '';

    if (disp === 'full') {
        viewFull = 'active';
        viewFront = '';
        viewBack = '';
    } else if (disp === 'front') {
        viewFront = 'active';
        viewFull = '';
        viewBack = '';
    } else if (disp === 'back') {
        viewBack = 'active';
        viewFull = '';
        viewFront = '';
    }

    const renderList = () => {
        if (disp === 'full') {
            return <Full />
        } else if (disp === 'front') {
            return <Front />
        } else if (disp === 'back') {
            return <Back />
        }
    }

    const show = props.isClicked.isClicked ? 'none' : 'block';

    return (
        <div className="ui container" id="section1" style={{ display: `${show}` }}>
            <h2 className="ui header">
                <img className="ui image" src={Proj} />
                <div className="content mee">
                    Projects
                </div>
            </h2>
            <br />
            <br />
            <div className="ui top attached tabular menu">
                <a className={`${viewFull} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isFull() }}> FullStack </a>
                <a className={`${viewFront} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isFront() }}>FrontEnd</a>
                <a className={`${viewBack} item`} style={{ fontSize: '20px', fontWeight: 'bolder' }} onClick={() => { props.isBack() }}>Backend</a>
            </div>
            <div className="ui bottom attached segment">
                {renderList()}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        section: state.section,
        isClicked: state.ham
    };
}

export default connect(mapStateToProps, { isFull, isFront, isBack })(Project);