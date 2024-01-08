const CLICK = "CLICK"
const initialState = {
    categories: [
        {id: 1, title: 'комнатные растения', img: 'category-1.png', status: 'new', style: 'item1'},
        {id: 1, title: 'букеты', img: 'category-1.png', status: 'new', style: 'item2'},
        {id: 1, title: 'семена', img: 'category-1.png', status: 'new', style: 'item3'},
        {id: 1, title: 'бонсаи', img: 'category-1.png', status: 'new', style: 'item4'},
        {id: 1, title: 'аксессуары', img: 'category-1.png', status: 'new', style: 'item5'},
        {id: 1, title: 'инвентарь', img: 'category-1.png', status: 'new', style: 'item6'},
        {id: 1, title: 'фонтанчики', img: 'category-1.png', status: 'new', style: 'item7'},
        {id: 1, title: 'мухоловки', img: 'category-1.png', status: 'new', style: 'item8'},

    ],
    products: [
        {id: 2, title: 'jjj'}
    ]
}
const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK: 
        return {state}

        default: 
        return state;
    }

}
export const actionCreatorClick = () => ({type: CLICK})
export default categoriesReducer;