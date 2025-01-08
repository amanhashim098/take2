import { Link } from "react-router-dom";
import logo from "../assets/images/logotake2.svg";

const NavBar = () => {
  return (
    <>
    <nav className="flex justify-around items-baseline">
      <ul className="flex justify-between w-80 font-bold text-2xl mb-3">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul className="flex justify-between w-80 font-bold text-2xl">
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
    <div className="w-full h-[0px] border-2 border-black "></div>
    </>

  );
};

export default NavBar;
