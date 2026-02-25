import Container from "./../Container";
import { HiDocumentDownload } from "react-icons/hi";

const Skills = () => {
  const skillList = [
    { name: "Full Stack Web Development (MERN)", level: "90%", width: "90%" },
    { name: "Mobile App Development (React Native)", level: "85%", width: "85%" },
    { name: "Frontend Architecture (React & Tailwind)", level: "95%", width: "95%" },
    { name: "Backend & API Management (Node/Express)", level: "75%", width: "75%" },
    { name: "Database Design (MongoDB & Mongoose)", level: "80%", width: "80%" },
    { name: "Tools & Version Control (Git & Figma)", level: "85%", width: "85%" },
  ];

  return (
    <div className="bg-gray-50 py-16 font-poppins">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-800">My Skills</h3>
            <div className="w-16 h-1 bg-sunC mt-2 rounded-full"></div>
          </div>
          
          <a 
            href="/my-cv.pdf" 
            download 
            className="bg-nightC text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 hover:bg-sunC hover:text-black "
          >
            <HiDocumentDownload className="text-xl" />
            Download CV
          </a>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-y-8">
          {skillList.map((item) => (
            <div key={item.name} className="w-full md:w-[48%]">
              <div className="flex justify-between mb-2 w-full">
                <h4 className="text-[17px] font-medium text-nightC">{item.name}</h4>
                <h4 className="text-[15px] font-bold text-sunC">{item.level}</h4>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sunC h-full rounded-full transition-all duration-1000"
                  style={{ width: item.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;


// import Container from "./../Container";

// const Skills = () => {
//   return (
//     <>
//       <div className="bg-gray-50 py-10 font-poppins">
//         <Container>
//           <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
//           <div className="w-full flex flex-wrap justify-between gap-y-8">
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//             <div className=" w-[48%] ">
//               <div className="flex justify-between mb-2 w-[100%]">
//                 <h4 className="text-[17px] font-medium">Web Design</h4>
//                 <h4 className="text-[15px] font-medium">65%</h4>
//               </div>
//               <div className="w-[100%] bg-gray-200 rounded-full h-2">
//                 <div className="bg-sunC h-2 rounded-full w-[65%]"></div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Skills;
