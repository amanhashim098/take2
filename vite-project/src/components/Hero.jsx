import heropic from "../assets/images/heropicture.png"

const Hero = () => {
  return (
    <div className="bg-[#141414] flex-grow p-14 flex justify-around">
      <img className="w-[746px] h-[568px] ml-9 mt-10" src={heropic} />
      <div className="h-[666px] text-9xl w-5/12">
        <span className="text-white font-normal font-['Inter']">
          TIMELESS<br />
        </span>
        <span className="text-white font-normal font-['Inter']">
          CURATIONS.<br />
        </span>
        <span className="text-white font-normal font-['Inter']">
          STYLE <br />
        </span>
        <span className="text-white font-normal font-['Inter']">
          REIMAGINED.<br />
        </span>
        <span className="text-white font-normal font-['Inter']">
          VINTAGE.<br />
        </span>
      </div>
    </div>
  );
};

export default Hero;
