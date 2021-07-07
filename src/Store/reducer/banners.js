import { ADD_BANNER, DELETE_BANNER, GET_ALL_BANNERS, UPDATE_BANNER } from "./../action/actions";

const initialState = [
    {link : "https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg", _id : "1"},
    {link : "https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg", _id : "2"},
    {link : "https://embellish-lukhnow.web.app/static/media/banner4.afd7f69b.jpg", _id : "3"}
];

const reducer = (state = initialState , actions)=>{
    const {type ,payload} = actions;
    switch(type){
        case GET_ALL_BANNERS:
            return payload;
        case ADD_BANNER:
            const banners = [...state, payload];
            return banners;
        case DELETE_BANNER:
            return payload;
        case UPDATE_BANNER:
            return payload;
        default:
    }
    return state;
}

export default reducer;