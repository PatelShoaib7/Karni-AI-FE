import {  ADD_ITEM_TO_CART_SUCESSS, GET_ITEM_LIST_ERROR, GET_ITEM_LIST_LOADING, GET_ITEM_LIST_SUCESSS, SEARCH_ITEM_LIST_ERROR, SEARCH_ITEM_LIST_LOADING, SEARCH_ITEM_LIST_SUCESSS } from "./Actions";



const initState  = {
  itemList  : [],
  searchedList : [],
  isLoading : null, 
  isError : null, 
  message : ""
}

export const EcommerceRducer =(state  = initState, action)=>{
   //console.log("state at rsucer -", state)
  //console.log("action at rsucer -", action)

  
   switch(action.type){
    case GET_ITEM_LIST_LOADING :{
      return {
          ...state ,
           isLoading : true,
      }
    }
      case GET_ITEM_LIST_SUCESSS :{
        return {
            ...state ,
             isLoading : false,
             itemList  : (action?.payload?.data || []),
             pagination : (action?.payload?.pagination ||  {}),
        }
      }
      case GET_ITEM_LIST_ERROR :{
        return {
            ...state ,
             isError : true,
             itemList  : []
        }
      }
      case SEARCH_ITEM_LIST_LOADING :{
        return {
            ...state ,
             isLoading : true,
        }
      }
        case SEARCH_ITEM_LIST_SUCESSS :{
          return {
              ...state ,
               isLoading : false,
               searchedList  : (action?.payload?.data || []),
               pagination : (action?.payload?.pagination ||  {}),
          }
        }
        case SEARCH_ITEM_LIST_ERROR :{
          return {
              ...state ,
               isError : true,
               itemList  : []
          }
        }

        case ADD_ITEM_TO_CART_SUCESSS :{
          return {
            ...state,
            message  : (action?.payload?.message),
            isLoading : false, 
            isLoading : false,
          }
        }
      default : return state
   }
}