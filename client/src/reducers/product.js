import {ALL_PRODUCT} from "../actions/types";

//
const initialState={};
export default function(state=initialState, action){
 const {type,payload}=action;
 switch(type){
     case ALL_PRODUCT:
     return {
         ...state,
         products:payload
     }
     default:
     return state;
 }
}