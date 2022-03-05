import React from 'react';

import Beauty from './SideBeauty/Beauty';
import NavBar from './NavBar/NavBar';
import Center from './LandingCenter/Center';
import Project from './Projects/Project';
import Skills from './About/Skills';
import Education from './About/Education';
import Experience from './About/Experience';
import MoreAboutMe from './About/MoreAboutme';
import Footer from './footer/footer';
import Check from '../checking/check';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Beauty />
                <Center />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="ui divider"></div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Education />
                <br />
                <br />
                <br />
                <div className="ui divider"></div>
                <br />
                <br />
                <br />
                <Project id={'section1'} />
                <br />
                <br />
                <br />
                <div className="ui divider"></div>
                <br />
                <br />
                <br />
                <Experience />
                <br />
                <br />
                <br />
                <div className="ui divider"></div>
                <br />
                <br />
                <br />
                <Skills />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="ui divider"></div>
                <br />
                <br />
                <br />
                <br />
                <MoreAboutMe />
                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        )
    }
}

export default App;