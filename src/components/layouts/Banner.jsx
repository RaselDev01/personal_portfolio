import bannerBG from "../../assets/Photos/bannerBG.png";
import Image from "../Image";
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <>
      <div className="w-full h-lvh bg-black relative">
        <div className="w-full h-lvh bg-black opacity-30 absolute top-0 left-0 z-0">
          <Image src={bannerBG} className={"w-full h-lvh"} />
        </div>
        
        <div className="w-full h-lvh flex flex-col justify-center items-center relative z-10 text-white px-4 text-center">
          <h3 className="text-2xl md:text-4xl font-500 font-poppins">
            Hi, I'm Rasel...
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-bold font-poppins my-4">
            Full Stack {' '}
            <span className="text-sunC">
              <Typewriter
                words={['Developer', 'Web Solutions Expert', 'Programmer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-lg md:text-2xl font-400 font-poppins mt-2 mb-2 text-gray-300">
            Scaling Ideas into Modern Digital Realities.
          </p>
          
          <a
            href="#"
            className="mt-6 text-nightC bg-sunC hover:bg-sunC/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Works
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;



// import bannerBG from "../../assets/Photos/bannerBG.png";
// import Image from "../Image";
// import { Typewriter } from 'react-simple-typewriter';

// const Banner = () => {
//   return (
//     <>
//       <div className="w-full min-h-lvh bg-black relative overflow-hidden">
//         <div className="w-full h-full bg-black absolute top-0 left-0 z-0">
//           <div className="opacity-40 w-full h-full">
//             <Image src={bannerBG} className="w-full h-full object-cover" />
//           </div>
//         </div>
        
//         <div className="w-full min-h-lvh flex flex-col justify-center items-center relative z-10 text-white px-6 py-16 text-center">
//           <h3 className="text-xl sm:text-2xl md:text-4xl font-medium font-poppins tracking-wide">
//             Hi, I'm Rasel...
//           </h3>
          
//           <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins my-4 leading-tight">
//             Full Stack {' '}
//             <span className="text-sunC block sm:inline-block">
//               <Typewriter
//                 words={['Developer', 'Web Solutions Expert', 'Programmer']}
//                 loop={0}
//                 cursor
//                 cursorStyle='|'
//                 typeSpeed={80}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </span>
//           </h1>

//           <p className="max-w-2xl text-base sm:text-lg md:text-2xl font-normal font-poppins mt-2 mb-8 text-gray-300 leading-relaxed">
//             Scaling Ideas into Modern Digital Realities.
//           </p>
          
//           <a
//             href="#works"
//             className="text-nightC bg-sunC hover:bg-sunC/90 px-10 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl text-sm md:text-base uppercase tracking-wider"
//           >
//             View My Works
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;