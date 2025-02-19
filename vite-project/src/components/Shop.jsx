import { useEffect, useState } from "react"
import { databases } from "../../appwrite-config"
import customer from "../assets/images/customer icon.svg"
import cartimg from "../assets/images/cart.svg"
import { Link } from "react-router-dom"
import ProductBox from "./ProductBox"


const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect (()=>{
    init()
  },[])
  
  const init = async ()=>{
    try{
    const response = await databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,import.meta.env.VITE_COLLECTIONS_ID_PRODUCTS
    );
    setProducts(response.documents)
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <div>
      <div className="flex-grow pt-24 px-4">
        <Link to="/login"><img src={customer} className=" absolute top-56 right-24" alt="" /></Link>
        <img src={cartimg} className=" absolute top-56 right-8" alt="" />
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 justify-items-center pt-8 px-28'>
            {products.map(({productimg,productName,$id})=>(<Link key={$id} to={`/shop/${$id}`}>
            <ProductBox className="uppercase bg-red-700" imgSrc={productimg} productTitle={productName}/></Link>))}
        </div>      
    </div>
    </div>
  )
}

export default Shop