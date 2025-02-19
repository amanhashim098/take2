import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom";
import ProductBox from "./ProductBox";
import customer from "../assets/images/customer icon.svg"
import cartimg from "../assets/images/cart.svg"
import { useEffect, useState } from "react";
import { databases } from "../../appwrite-config";
// import { Databases } from "appwrite";

const ProductClick = () => {
    const [product,setProduct] = useState([]);
    const[cart,setCart] = useState([]);
    const[cartcount,setCartcount] = useState(0);
    const {id} = useParams();
    useEffect(()=>{
      init()
    },[])
    const init = async ()=>{
      try{
        const response = await databases.getDocument(import.meta.env.VITE_DATABASE_ID,import.meta.env.VITE_COLLECTIONS_ID_PRODUCTS,id);
        setProduct(response)
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div className="flex-grow flex justify-between h-full">
              <img src={customer} className=" absolute top-56 right-24" alt="" />
              <img src={cartimg} className=" absolute top-56 right-8" alt="" />
              <h5 className="absolute text-xs top-[250px] right-[28px] border-2 border-black rounded-sm bg-black text-white">{cartcount}</h5>
        <div className="flex items-center w-3/12 ml-24">
        <ProductBox imgSrc={product.productimg}></ProductBox>
        
        </div>
        <div className="w-7/12 shadow-[-10px_0px_5px_2px_rgba(0,0,0,0.25)] bg-white p-12 ">
        <h1 className="w-[230px] h-[53px] text-black text-2xl font-medium font-sans">MENS/ JACKETS</h1>
        <h3 className="w-[272px] h-[18px] text-black text-[14px] uppercase font-medium font-sans">{product.productName}</h3>
        <h3 className="w-[272px] h-[18px] text-black text-[14px] font-medium font-sans mt-2">INR {product.price}</h3>
        <h3 className="w-[272px] h-[18px] text-black text-[14px] font-medium font-sans mt-10">DESCRIPTION</h3>
        <h3 className="w-fit h-[18px] text-black text-[14px] font-normal font-sans mt-3">{product.description}</h3>        
        <h3 className="w-[272px] h-[18px] text-black text-[14px] font-medium font-sans mt-16">SIZE - {product.size}</h3>
        <h3 className="w-[272px] h-[18px] text-black text-[14px] font-medium uppercase font-sans mt-4">CONDITION - {product.condition}</h3>
        <button className="w-[200px] absolute right-16 bg-[#141414] rounded-sm text-white hover:shadow-[-2px_4px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in py-2">ADD TO CART</button>
        <h3 className="w-[272px] h-[18px] text-black text-xl font-medium font-sans mt-20">RETURNS / EXCHANGES</h3>
        <h3 className="w-fit h-[18px] text-black text-[14px] font-normal font-sans mt-4">Items can be returned within 14 days of delivery for a refund or store credit. Items must be unused, unwashed, and in their original condition with tags attached.</h3>

        </div>
    </div>
  )
}

export default ProductClick