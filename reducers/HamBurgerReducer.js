let flag = false;

const INTIAL_STATE = {
    isClicked: flag
};


export default (state = INTIAL_STATE, action) => {
    if (action.type === "CLICKED") {
        flag = !flag;
        return { ...state, isClicked: flag };
    }
    return state;
}