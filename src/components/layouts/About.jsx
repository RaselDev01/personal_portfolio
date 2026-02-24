import Container from "../Container";

const About = () => {
  return (
    <>
      <div className="w-full py-20 font-poppins ">
        <Container>
          <div className="text-center mb-15 flex flex-col items-center justify-center">
            <h3 className="mb-4 text-[18px] font-medium rounded-2xl bg-nightC text-white hover:bg-sunC hover:text-black duration-250 w-[120px] flex items-center justify-center">
              About Me
            </h3>
            <h3 className="text-4xl font-semibold">Know Me More</h3>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-10 justify-around items-center mb-15">
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <p className="text-[16px] leading-7 text-gray-600">
                <span className="font-medium text-nightC text-[20px] ">
                  Hi, I'm{" "}
                </span>
                <p className="text-nightC underline decoration-sunC underline-offset-4 text-[22px] font-semibold mb-3 inline-block ">
                  Rasel Ahamed.
                </p>
                <br /> I am a dedicated Designer & Developer with a deep passion
                for modern web aesthetics. My focus is on crafting simple,
                clean, and slick websites that provide real value to users. I
                believe that great design is more than just looks it’s about
                functionality and reliability. My commitment is to deliver
                high-quality work that meets your exact requirements, ensuring
                every project is completed on time and within budget. I’m ready
                to bring your vision to life with precision and creativity.
              </p>
            </div>
            <div className="w-full lg:w-1/4 text-center border-2 border-gray-200 rounded-lg py-10 px-5 hover:shadow-lg duration-250">
              <h2 className="text-4xl border-2 rounded-full bg-nightC px-2 py-4 inline-block mb-1 text-white ">
                10+
              </h2>
              <h4 className="text-nightC text-2xl ">Project Completed</h4>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-10 justify-around items-start">
            <div className="">
              <h4 className="text-gray-600 text-[17px] font-semibold mt-5">
                Name:
              </h4>
              <p className="text-nightC text-[20px] font-medium ">
                Md. Rasel Ahamed
              </p>
            </div>
            <div className="">
              <h4 className="text-gray-600 text-[17px] font-semibold mt-5">
                Languages:
              </h4>
              <p className="text-nightC text-[20px] font-medium ">
                Bangla, English
              </p>
            </div>
            <div className="">
              <h4 className="text-gray-600 text-[17px] font-semibold mt-5">
                Date of birth:
              </h4>
              <p className="text-nightC text-[20px] font-medium ">
                December 17, 2005
              </p>
            </div>
            <div className="">
              <h4 className="text-gray-600 text-[17px] font-semibold mt-5">
                From:
              </h4>
              <p className="text-nightC text-[20px] font-medium ">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
