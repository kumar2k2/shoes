import uuid from "uuid";
const Product=[
    {
     id:uuid.v4(),
     productName:"Shoe wearing for sport",
     productImage:"https://images.unsplash.com/photo-1512640122685-e77ab16ad8c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
     price:"$45"
    },
    {
        id:uuid.v4(),
        productName:"Spress",
        productImage:"https://unsplash.com/photos/FnWsyFfpqaE",
        price:"$50"
    }
]

export default Product;