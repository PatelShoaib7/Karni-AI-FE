import axios from "axios";
import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCESSS, GET_ITEM_LIST_ERROR, GET_ITEM_LIST_LOADING, GET_ITEM_LIST_SUCESSS, SEARCH_ITEM_LIST_ERROR, SEARCH_ITEM_LIST_LOADING, SEARCH_ITEM_LIST_SUCESSS } from "./Actions";

const BASE_URL ="https://karni-ai-be.onrender.com"

export const getAllItemsList = () => async (dispatch) => {
  dispatch({ type: GET_ITEM_LIST_LOADING });
 // console.log("--loading---")
  try {
    const response = await axios.get(`${BASE_URL}/user/get/item/list`);
    //console.log("Response:", response.data);

    dispatch({ type: GET_ITEM_LIST_SUCESSS, payload: response.data });
  } catch (error) {
    console.log("Error fetching items:", error);
    dispatch({ type: GET_ITEM_LIST_ERROR, payload: error.message || "An error occurred" });
  }
};


export const getSearchedItemsList = (searchTerm) => async (dispatch) => {
    dispatch({ type: SEARCH_ITEM_LIST_LOADING });
   //console.log("--loading---")
    try {
      const searchBy = searchTerm.trim();
      const response = await axios.get(`${BASE_URL}/user/get/item/list?searchBy=${searchBy}`);
      console.log("Response:", response.data);
      dispatch({ type: SEARCH_ITEM_LIST_SUCESSS, payload: response.data });
    
    } catch (error) {
      console.log("Error fetching items:", error);
      dispatch({ type: SEARCH_ITEM_LIST_ERROR, payload: error.message || "An error occurred" });
    }
  };
  
export const addToCart = (searchTerm) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
   //console.log("--loading---")
    try {
      const response = await axios.get(`${BASE_URL}/user/get/item/list?searchBy=${searchBy}`);
      console.log("Response:", response.data);
      dispatch({ type: ADD_ITEM_TO_CART_SUCESSS, payload: response.data });
    
    } catch (error) {
      console.log("Error fetching items:", error);
      dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: error.message || "An error occurred" });
    }
  };
  

