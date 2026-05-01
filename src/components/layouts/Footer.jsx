import { FaArrowAltCircleUp } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="w-full bg-nightC py-10 text-white relative">
        <Container>
          <div className="w-full flex justify-around items-center text-[13px] md:text-[15px] lg:text-[17px] flex-col md:flex-row gap-4">
            <p>
              &copy; 2025 - {new Date().getFullYear()} RSL Web Solutions. All
              Rights Reserved.
            </p>
            <h5>
              Designed and Developed by{" "}
              <a
                href="https://github.com/RaselDev01"
                className="hover:underline text-sunC"
              >
                MD RASEL AHAMED
              </a>
            </h5>
          </div>
        </Container>

        <FaArrowAltCircleUp
          onClick={scrollToTop}
          className="bg-white text-nightC hover:text-sunC hover:bg-nightC duration-200 rounded-[50%] text-[32px] cursor-pointer fixed bottom-6 right-6 z-50 shadow-lg"
        />
      </footer>
    </>
  );
};

export default Footer;