import bannerBG from "../../assets/Photos/bannerBG.png";
import Image from "../Image";

const Banner = () => {
  return (
    <>
      <div className="w-full h-lvh bg-black relative  ">
        <div className="w-full h-lvh bg-black opacity-30 absolute top-0 left-0 z-0">
          <Image src={bannerBG} className={"w-full h-lvh"} />
        </div>
        <div className="w-full h-lvh flex flex-col justify-center items-center relative z-10 text-white px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-500 font-poppins ">
            Hi, I'm a Rasel...
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold font-poppins my-4">
            Full Stack Web Developer
          </h1>
          <p className="text-lg md:text-2xl font-400 font-poppins">
            I build responsive and modern websites
          </p>
          <a
            href="#"
            className="mt-4 text-nightC bg-sunC hover:bg-sunC/90 px-6 py-2 rounded-full font-medium transition-colors duration-300"
          >
            View My Works
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
