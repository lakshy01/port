import React from 'react';
import Chess from '../../images/Chess.jpg';
import Hamari from '../../images/Hamari.jpg';
import Vteach from '../../images/Vteach.jpg';
import AboutMe from '../../images/AboutMe.png';
import Art from '../../images/Art.jpg';
import { connect } from 'react-redux';

const MoreAboutMe = (props) => {
    const disp = props.isClicked.isClicked ? 'none' : 'block';
    return (
        <div className="ui container iee" style={{ display: `${disp}` }}>
            <div className="ui divided items">
                <h2 className="ui header">
                    <img className="ui image" src={AboutMe} />
                    <div className="content mee see kee">
                        More About Me
                    </div>
                </h2>
                <br />
                <br />
                <div className="item">
                    <div className="image">
                        <img src={Hamari} />
                    </div>
                    <div className="content">
                        <div className="header mee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Hamari Pehchann Ngo
                        </div>
                        <br />
                        <div className="meta">
                            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Volunteering</span>
                        </div>
                        <br />
                        <div className="description">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>Hamari Pahchan is a non-governmental organization, striving and working to make Delhi a safer and happier place to live. It provides a platform to the deserving people from society, to create their own identity and carve out a niche for themselves.
I worked here as an Intern for raising funds for women's health and sanitization. I designed posters and wrote content for spreading awareness among people.</p>
                        </div>
                        <br />
                        <div className="extra" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Jun, 2020 - Jul,2020
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={Vteach} />
                    </div>
                    <div className="content">
                        <div className="header mee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Vteach,Vellore Institute Of Technology,Chennai
                        </div>
                        <br />
                        <div className="meta">
                            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Researcher</span>
                        </div>
                        <br />
                        <div className="description">
                            <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>Vteach is a social outreach club which provides education facilities to underprivileged children.
I worked as a volunteer in the research team of Vteach. I made the syllabus for the students with other fellow researchers and also helped in teaching the students. </p>
                        </div>
                        <br />
                        <div className="extra" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Jul, 2019 - Jun,2020
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={Chess} />
                    </div>
                    <div className="content">
                        <div className="header mee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Chess
                        </div>
                        <br />
                        <div className="meta">
                            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>For fun!!!</span>
                        </div>
                        <br />
                        <div className="description" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            I always had some interest in chess. During pandemic, I started playing chess a little more seriously by learning different openings and patterns to improve player positions in the mid and end game. I also started watching international tournaments for inspiration and fun!!!
                        </div>
                        <br />
                        <div className="extra">
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={Art} />
                    </div>
                    <div className="content">
                        <div className="header mee" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            Art
                        </div>
                        <br />
                        <div className="meta">
                            <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>Hobby</span>
                        </div>
                        <br />
                        <div className="description" style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                            I have an interest in drawing since a very long while.I am good at making cliparts, anime characters.
                        </div>
                        <br />
                        <div className="extra">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { isClicked: state.ham };
}

export default connect(mapStateToProps)(MoreAboutMe);