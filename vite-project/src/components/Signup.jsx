import { Link, useNavigate } from "react-router-dom";
import customer from "../assets/images/customer icon.svg";
import cartimg from "../assets/images/cart.svg";
import { useState } from "react";
import { account } from "../../appwrite-config";
import { ID } from "appwrite";
import { db } from "../../database";
const Signup = () => {

    const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    gender:"",
    phone: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try{
        const userid = ID.unique();
        const user = await account.create(userid,formdata.email,formdata.password,`${formdata.fname} ${formdata.lname}`)
        console.log(user)
        await db.Customers.createdoc(userid, {
            userID: userid, 
            customerName: `${formdata.fname} ${formdata.lname}`,
            gender: "", 
            email: formdata.email,
            phone: formdata.phone
        });
        navigate("/login");
    }catch(err){
        console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Link to="/login">
        <img src={customer} className="absolute top-56 right-24" alt="Customer Icon" />
      </Link>
      <img src={cartimg} className="absolute top-56 right-8" alt="Cart Icon" />
      <div className="w-[800px] bg-white shadow-[-12px_14px_6px_3px_rgba(0,0,0,0.25)] border-[3px] border-black px-5 py-10">
        <div className="ml-11 text-black text-xl font-semibold font-sans mb-8">
          Create a new account
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-14 px-7">
            <div className="flex justify-evenly">
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                value={formdata.fname}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[20%]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={formdata.lname}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[20%]"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[40%]"
                required
              />
            </div>
            <div className="flex justify-evenly">
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[20%]"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[30%]"
                required
              />
              <input
                type="password"
                placeholder="Confirm Pass"
                name="confirmPass"
                value={formdata.confirmPass}
                onChange={handleChange}
                className="border-b-2 border-gray-500 outline-none font-sans font-medium placeholder:text-gray-400 placeholder:font-semibold placeholder:text-sm focus:border-black w-[30%]"
                required
              />
            </div>
          </div>

          <div className="ml-16 mt-3">
            <Link to="/login">
              <h5 className="font-normal text-xs underline">Already have an account?</h5>
            </Link>
          </div>

          <div className="flex justify-center mt-8">
            <button className="bg-[#141414] rounded-sm text-white hover:shadow-[-2px_4px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in py-2 px-12">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
