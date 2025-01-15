import heropic from "../assets/images/heropicture.png"

const Hero = () => {
  return (
    <div className="bg-[#141414] flex-grow h-full p-8 flex justify-around items-center">
      <img className="w-[600px] h-[450px] " src={heropic} />
      <div className="h-max text-8xl w-5/12 mt-4">
        <span className="text-white font-normal font-sans">
          TIMELESS<br />
        </span>
        <span className="text-white font-normal font-sans">
          CURATIONS.<br />
        </span>
        <span className="text-white font-normal font-sans">
          STYLE <br />
        </span>
        <span className="text-white font-normal font-sans">
          REIMAGINED.<br />
        </span>
        <span className="text-white font-normal font-sans">
          VINTAGE.<br />
        </span>
      </div>
    </div>
  );
};

export default Hero;
