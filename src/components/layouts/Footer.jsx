import { FaArrowAltCircleUp } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-nightC py-10 text-white relative">
        <Container>
          <div className="w-full flex justify-around items-center text-[13px] md:text-[15px] lg:text-[17px] flex-col md:flex-row  gap-4">
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
                  <FaArrowAltCircleUp className="bg-white text-nightC hover:text-sunC hover:bg-nightC duration-200 rounded-[50%] text-[32px] cursor-pointer absolute bottom-4 right-4"/>
      </footer>
    </>
  );
};

export default Footer;
