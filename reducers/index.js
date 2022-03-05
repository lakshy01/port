import { combineReducers } from 'redux';
import hamburgerReducer from './HamBurgerReducer';
import ProjectReducer from './ProjectReducer';
import SchoolReducer from './SchoolReducer';

export default combineReducers({
    ham: hamburgerReducer,
    section: ProjectReducer,
    edu: SchoolReducer
});

