import constants from "./constants";
import produce from 'immer';
const initialState = {
    leftSidebarVisible: true,
    rightSidebarVisible: false,
    windowWidth: 0,
    isMobileDevice: true,
};

const layoutReducer = (state = initialState, {type, payload})=>
    produce(state, draft=> {
    switch (type) {
        case constants.LAYOUT_WINDOW_RESIZE:
            if(payload <  648) {
                draft.isMobileDevice = true;
                draft.rightSidebarVisible= false
            }else{
                draft.isMobileDevice = false;
            }
            draft.windowWidth = payload;
            break;
        case constants.LAYOUT_LEFT_SIDEBAR_HIDE:
            draft.leftSidebarVisible = false;
            break;
        case constants.LAYOUT_LEFT_SIDEBAR_SHOW:
            draft.leftSidebarVisible = true;
            break;
        case constants.LAYOUT_RIGHT_SIDEBAR_TOGGLE:
            draft.rightSidebarVisible = !state.rightSidebarVisible;
            break;
        case constants.LAYOUT_RIGHT_SIDEBAR_HIDE:
            draft.rightSidebarVisible = false;
            break;
        case constants.LAYOUT_RIGHT_SIDEBAR_SHOW:
            draft.rightSidebarVisible = true;
            break;
        default:
            break;
    }
});

export default layoutReducer;
