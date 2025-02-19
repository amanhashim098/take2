import { Link, useNavigate } from "react-router-dom";
import customer from "../assets/images/customer icon.svg"
import cartimg from "../assets/images/cart.svg"
import { useState } from "react";
import { account } from "../../appwrite-config";

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async (e,email,password)=>{
        e.preventDefault();

        try{
            const session = await account.createEmailPasswordSession(email,password)
            console.log(session)
            navigate("/dashboard")
        }catch(err){
            console.log(err)
            setMessage("Login failed, Please enter correct credentials")
        }

    }
  return (
    <div className="flex justify-center items-center h-screen">
        <Link to="/login"><img src={customer} className=" absolute top-56 right-24" alt="" /></Link>
        <img src={cartimg} className=" absolute top-56 right-8" alt="" />
      <div className="w-[400px] h-[400px] bg-white shadow-[-12px_14px_6px_3px_rgba(0,0,0,0.25)] border-[3px] border-black px-5 py-10">
        <div className="ml-3 text-black text-xl font-semibold font-sans">Log in to your account</div>
        <form onSubmit={(e)=>handleSubmit(e,email,password)}>
        <div className="flex flex-col p-7 gap-12 mt-3">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:text-sm placeholder:font-semibold focus:border-black"
          />
        </div>
        <Link to="/forgot">
          <h5 className="font-normal text-xs ml-7 underline">Forgot password?</h5>
        </Link>
        <Link to="/signup">
          <h5 className="font-normal text-xs ml-7 mt-1 underline">Create new account</h5>
        </Link>
        {message && (<h6 className="text-red-600 text-sm ml-9 absolute ">{message}</h6>)}
        <div className="flex justify-center mt-8">
          <button className="bg-[#141414] rounded-sm text-white hover:shadow-[-2px_4px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in py-2 px-12">
            Log in
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
