const INTIAL_STATE = {
    edu: "college"
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'COLLEGE': return { ...state, edu: 'college' };
        case 'HIGH': return { ...state, edu: 'high' };
        case 'SENIOR': return { ...state, edu: 'senior' };
        default: return state;
    };
};

