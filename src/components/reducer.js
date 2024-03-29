import Watch from "../images/watch.jpg"

export const initialState ={
    basket:[
],
    user: null,
}
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=> item.price +amount,0);
const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
            return{...state,
            basket:[...state.basket, action.item],}
            
        case "REMOVE_FROM_BASKET":
             let newbasket=[...state.basket];
             const index = state.basket.findIndex((basketItem)=> basketItem.id===action.id);
             if(index >=0){
               newbasket.splice(index, 1);
               
             }else{
                 console.warn(`can't remove product (id: ${action.id}) as it is nothing`);
             }

            return {...state,basket:newbasket};

        default:
            return state;    
    }
}

export default reducer