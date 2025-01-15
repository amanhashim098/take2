import ProductBox from "./ProductBox"
import { Link } from "react-router-dom"
import products from "./products"
import customer from "../assets/images/customer icon.svg"
import cart from "../assets/images/cart.svg"

const Shop = () => {
  return (
    <div className="flex-grow pt-24 px-4">
        <img src={customer} className=" absolute top-56 right-24" alt="" />
        <img src={cart} className=" absolute top-56 right-8" alt="" />
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 justify-items-center pt-8 px-28'>
            {products.map(({productimg,productname,id})=>(<Link key={id} to={`/shop/${id}`}>
            <ProductBox className="uppercase bg-red-700" imgSrc={productimg} productTitle={productname}/></Link>))}
        </div>      
    </div>
  )
}

export default Shop

