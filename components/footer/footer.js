import React from 'react';
import { connect } from 'react-redux';
import './Style.css';



const footer = (props) => {

    const disp = props.isClicked.isClicked ? 'none' : 'block';

    return (
        <div className="ui inverted segment lee" style={{ display: `${disp}` }}>
            <p>By Lakshy Rastogi</p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(footer);