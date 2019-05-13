import React, {useEffect,Fragment} from 'react';
import {connect} from "react-redux";
import propTypes from 'prop-types';
import {allProduct} from "../actions/product";

// const Product=({ allProduct, product})=> {
// useEffect(()=>{
//   allProduct();
// },[allProduct]);
//   return <Fragment>
//   <h1>sdkfsfs</h1>
//   </Fragment>;
// }
function Product({allProduct,product:{products}}){
useEffect(()=>{
allProduct();
},[allProduct]);
return <Fragment>
  {products!==undefined ? <Fragment>
    {products.map(pro=><div key={pro.id}>
      <img src={pro.productImage} alt={pro.productImage}/>
    </div>)}
  </Fragment>:"no"}
</Fragment>
}

Product.propTypes = {
 Product:propTypes.func,
 allProduct:propTypes.func.isRequired
}
const mapStateToProps=state=>({
  product:state.product
})
export default  connect(mapStateToProps,{allProduct})(Product)

