import { CategoryType } from "../types/types"
const CLICK = "CLICK"
const initialState = {
    categories: [
        {id: 1, title: 'комнатные растения', img: 'category-1.png', status: 'new', style: 'item1'},
        {id: 2, title: 'букеты', img: 'category-1.png', status: 'new', style: 'item2'},
        {id: 3, title: 'семена', img: 'category-1.png', status: 'new', style: 'item3'},
        {id: 4, title: 'бонсаи', img: 'category-1.png', status: 'new', style: 'item4'},
        {id: 5, title: 'аксессуары', img: 'category-1.png', status: 'new', style: 'item5'},
        {id: 6, title: 'инвентарь', img: 'category-1.png', status: 'new', style: 'item6'},
        {id: 7, title: 'фонтанчики', img: 'category-1.png', status: 'new', style: 'item7'},
        {id: 8, title: 'мухоловки', img: 'category-1.png', status: 'new', style: 'item8'}

    ] as Array<CategoryType>
   
}
export type InitialStateType = typeof initialState;
const categoriesReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case CLICK: 
        return {state}

        default: 
        return state;
    }

}
type actionCreatorClickType = {
    type: typeof CLICK,
    
}
export const actionCreatorClick = (): actionCreatorClickType => ({type: CLICK})
export default categoriesReducer;