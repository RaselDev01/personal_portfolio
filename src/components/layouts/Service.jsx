import React from "react";
import Container from "./../Container";
import { IoApps } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { LiaConnectdevelop } from "react-icons/lia";

// services data start
const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly web designs that enhance user experience and engagement.",
    icon: (
      <CgWebsite className="text-4xl text-nightC mb-4 m-auto group-hover:text-sunC duration-200" />
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Building responsive and interactive websites using modern web technologies and frameworks.",
    icon: (
      <LiaConnectdevelop className="text-4xl text-nightC mb-4 m-auto group-hover:text-sunC duration-200" />
    ),
  },
  {
    id: 3,
    title: "App Design & Develop",
    description:
      "Designing and developing mobile applications that provide seamless user experiences across various devices.",
    icon: (
      <IoApps className="text-4xl text-nightC mb-4 m-auto group-hover:text-sunC duration-200" />
    ),
  },
];
// service data end

const Service = () => {
  return (
    <>
      <div className="w-full py-20 font-poppins bg-gray-100">
        <Container>
          <div className="text-center mb-15 flex flex-col items-center justify-center">
            <h3 className="mb-4 text-[17px] font-medium rounded-2xl bg-nightC text-white hover:bg-sunC hover:text-black duration-250 
            w-[120px] flex items-center justify-center">
              What I Do?
            </h3>
            <h3 className="text-4xl font-semibold">
              How I can help your next project
            </h3>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-nightC text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
