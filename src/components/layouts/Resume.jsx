import React from "react";
import Container from "../Container";

const Resume = () => {
  return (
    <>
      <div className="w-full py-20 font-poppins bg-white">
        <Container>
          <div className="text-center mb-15 flex flex-col items-center justify-center">
            <h3
              className="mb-4 text-[18px] font-medium rounded-2xl bg-nightC text-white hover:bg-sunC hover:text-black duration-250 
            w-[120px] flex items-center justify-center"
            >
              Resume
            </h3>
            <h3 className="text-4xl font-semibold">A summary of My Resume</h3>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-nightC">
                Education
              </h3>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sunC">
                  Diploma in Computer Science & Technology
                </h4>
                <span className="text-gray-600">
                  Munhsiganj Polytechnic Institute - 2021 to 2025
                </span>
                <p className="text-gray-700 mt-2">
                  Completed the diploma program, focusing on software development,
                  algorithms, and data structures.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sunC">
                    Secondary School Certificate (SSC)
                </h4>

                <span className="text-gray-600">
                  Naogaon K.D Government High School - 2019 to 2021
                </span>
                <p className="text-gray-700 mt-2">
                  Completed high school with a focus on science and mathematics.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-6 text-nightC">
                Experience
              </h3>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sunC">
                  Independent Frontend Developer
                </h4>
                <span className="text-gray-600">
                  Freelance - 2025 to Present
                </span>
                <p className="text-gray-700 mt-2">
                  Developing high-performance, responsive web applications using React.js. Successfully built projects focusing on modern UI/UX principles, API integration, and clean, maintainable code structures.
                </p>
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-sunC">
                  Full Stack Web Development (Trainee)
                </h4>
                <span className="text-gray-600">
                  Creative IT Institute. - 2025 to 2026
                </span>
                <p className="text-gray-700 mt-2">
                  Developing end-to-end web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Working on real world projects, integrating REST APIs, and managing database architectures while ensuring pixel-perfect frontend design.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Resume;
