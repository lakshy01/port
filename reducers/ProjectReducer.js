const INTIAL_STATE = {
    section: "full"
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'FULL': return { ...state, section: 'full' };
        case 'FRONT': return { ...state, section: 'front' };
        case 'BACK': return { ...state, section: 'back' };
        default: return state;
    };
};

