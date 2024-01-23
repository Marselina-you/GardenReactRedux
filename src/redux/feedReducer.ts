import { CommentType } from "../types/types";

const CLICK = "CLICK";
let initialState = {
    comments: [
        {id: 1, name: 'Светлана Андреева', content: 'Собирала букет для учительницы - очень оригинально получилось, а главное -душой!', time: '23.11.2022'},
        {id: 2, name: 'Миша Андреев', content: 'Все супер', time: '22.11.2022'},
        {id: 3, name: 'Миша Андреев', content: 'Все суер', time: '22.11.2022'}
    ] as Array<CommentType>
}
export type InitialStateType = typeof initialState;
const feedReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK: 
        return {state}

        default: 
        return state;
    }

}
export const actionCreatorClick = () => ({type: CLICK})
export default feedReducer;
    
  