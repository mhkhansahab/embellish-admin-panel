import { DELETE_USER, SET_USER } from "../action/actions";

const initialState = {
    currentUser : null,
    isLogin : false
};

const reducer = (state = initialState, actions) =>{
    const {type, payload} = actions;
    switch (type) {
        case SET_USER:
            return{
                ...state,
                currentUser : payload,
                isLogin : true
            }
        case DELETE_USER:
            return{
                ...state,
                currentUser: null,
                isLogin: false
            }
        default:
    }
    return state;
}

export default reducer;