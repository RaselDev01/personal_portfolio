import React, { useState } from "react";
import Container from "../Container";




const Portfolio = () => {
  const categories = ["All", "Full-Stack", "Frontend", "Video Demos", "Case Studies"];
  
  const allProjects = [
    { 
      id: 1, 
      title: "MERN E-commerce App", 
      category: "Full-Stack", 
      type: "image",
      content: "assets/img 1  (1).jpg" 
    },
    { 
      id: 2, 
      title: "Project Walkthrough 1", 
      category: "Video Demos", 
      type: "video",
      content: "assets/Anne-Marie_-_DEPRESSED__Official_Video_(1080p).mp4" 
    },
    { 
      id: 3, 
      title: "Business Portfolio", 
      category: "Frontend", 
      type: "image",
      content: "assets/img 2  (2).jpg" 
    },
    { 
      id: 4, 
      title: "Project Walkthrough 2", 
      category: "Video Demos", 
      type: "video",
      content: "assets/Anne-Marie_-_DEPRESSED__Official_Video_(1080p).mp4" 
    },
    { 
      id: 5, 
      title: "Technical Case Study", 
      category: "Case Studies", 
      type: "image",
      content: "assets/img 2  (2).jpg" 
    },
    { 
      id: 6, 
      title: "Admin Dashboard UI", 
      category: "Frontend", 
      type: "image",
      content: "assets/img 1  (1).jpg" 
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div id="portfolio" className="w-full py-20 font-poppins bg-gray-100">
      <Container>
        <div className="text-center mb-14 flex flex-col items-center justify-center">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <h3 className="mb-4 text-[17px] font-medium rounded-2xl bg-nightC text-white hover:bg-sunC hover:text-black duration-250 
            w-[120px] flex items-center justify-center">
              Portfolio
            </h3>
            <h3 className="text-4xl font-semibold">
              Some of my most recent projects
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategory(category)}
                className="relative group px-4 py-2 cursor-pointer"
              >
                <span className={`absolute top-0 left-0 h-[2px] bg-sunC transition-all duration-500 ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                <h3 className={`text-[16px] font-semibold transition-colors duration-300 ${activeCategory === category ? 'text-nightC' : 'text-gray-500 group-hover:text-nightC'}`}>
                  {category}
                </h3>
                <span className={`absolute bottom-0 right-0 h-[2px] bg-sunC transition-all duration-500 ${activeCategory === category ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
                <div className="w-full h-[220px] overflow-hidden bg-black">
                  {project.type === "video" ? (
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      muted
                    >
                      <source src={project.content} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={project.content} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-6 text-left">
                  <span className="text-sunC text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-nightC mt-2 group-hover:text-sunC transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;