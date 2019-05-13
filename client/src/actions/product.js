import { ALL_PRODUCT}from "./types";
import products from "../components/productStore";

//
export const allProduct=()=>dispatch=>{
    dispatch({
        type:ALL_PRODUCT,
        payload:products
    })
}