import { GET_ALL_CATEGORIES } from "./../action/actions";

const initialState = [];

const reducer = (state = initialState , actions)=>{
    const {type ,payload} = actions;
    switch(type){
        case GET_ALL_CATEGORIES:
            return payload;
        default:
    }
    return state;
}

export default reducer;