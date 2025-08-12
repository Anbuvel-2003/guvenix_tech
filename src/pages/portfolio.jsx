"use client";
import portfolio from "../assets/portfolio.png";
import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import container from "../assets/container.png";

function Portfolio() {
  const projectsData = [
    {
      id: 1,
      title: "MR Brothers",
      description:
        "Experience a seamless journey in jewelry manufacturing with MR Brothers, your trusted partner for designers, retailers, and artisans. Our platform simplifies the entire process, from custom jewelry orders to an extensive catalog of high-quality designs.",
      // image: "/images/projects/MR.jpg",
      tag: ["All", "Mobile", "logos"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.mrbrothers&pcampaignid=web_share",
    },
    {
      id: 2,
      title: "Cignix",
      description:
        "Are you struggling to quit smoking? You are not alone in this, and with the right support, you can reclaim a healthier lifestyle. Cignix is an app designed to guide you every step of the way, offering a structured approach to help you break free from smoking.",
      // image: "/images/projects/Cignix.webp",
      tag: ["All", "Mobile", "Web"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.cignix&pcampaignid=web_share",
    },
    {
      id: 3,
      title: "Shopeasey",
      description:
        "Welcome to our Internal E-Commerce Platform, a dedicated online marketplace designed exclusively for our employees. This platform aims to streamline the purchasing process for a wide range of products and services, enhancing convenience and accessibility for all staff members.",
      // image: "/images/projects/shopeasey.jpg",
      tag: ["All", "Web", "Mobile", "logos"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.shopeasey&pcampaignid=web_share",
    },
    {
      id: 4,
      title: "Albion Bank Auction",
      description:
        "Albion portal is designed to make eAuction easy and convenient for buyers, bidders and bank users alike.We have been in the market for several years and built up trust over the years by setting up a hassle-free eAuction process which is legally safe and user-friendly.",
      // image: "/images/projects/Albion.png",
      tag: ["All", "Mobile", "Web"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.albionbankauctions&pcampaignid=web_share",
    },
    {
      id: 5,
      title: "wall 360",
      description:
        "Wall360 is an innovative real estate portal designed to streamline the process of buying, selling, and renting properties. Built with a user-friendly interface and advanced search capabilities, Wall360 caters to both property seekers and agents, offering a comprehensive platform that simplifies real estate transactions.",
      // image: "/images/projects/wall360.jpg",
      tag: ["All", "Website", "Mobile"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.wall360&pcampaignid=web_share",
    },
    {
      id: 6,
      title: "Truck Taxi",
      description:
        "Truck Taxi connects you with mini truck owners for quick, reliable, and hassle-free cargo transport.",
      // image: "/images/projects/trucktaxi.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.trucktaxi&pcampaignid=web_share",
    },
    {
      id: 7,
      title: "Fobes",
      description:
        "At Fobes, we're more than just a job portal; we're your partner in career success. Our dedicated team is committed to revolutionizing the job search experience.We believe in connecting talent with opportunity, ensuring that every individual finds meaningful work, and every employer discovers exceptional talent.",
      // image: "/images/projects/fobes.jpg",
      tag: ["All", "Mobile", "logos"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.fobesjobportal&pcampaignid=web_share",
    },
    {
      id: 8,
      title: "BrandMax",
      description:
        "BrandMax is your ultimate mobile platform designed exclusively for your personalized shopping. We are a B2B marketplace that brings together manufacturers, wholesalers, and retailers in one seamless digital ecosystem. With our user-friendly mobile app, we transform the way your business is done.",
      // image: "/images/projects/BM.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl:
        "https://play.google.com/store/apps/details?id=com.fobesjobportal&pcampaignid=web_share",
    },
  ];
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="md:!mt-18 !mt-15  ">
      <div>
        <img src={portfolio} className="w-screen h-auto" />
      </div>
      <section id="projects">
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Website"
            isSelected={tag === "Website"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="logos"
            isSelected={tag === "logos"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 md:gap-12 !m-10">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <div className="relative !mb-10 cursor-pointer shadow-2xl rounded-2xl bg-[#1B75BB]">
                <img src={container} alt="rounded w-[100%] h-[100%]" />
                <div className="bg-white lg:!p-10 md:!p-5 !p-3 absolute w-[80%] rounded-[10px] md:-bottom-10 -bottom-5 lg:!mx-10 md:!mx-5 !mx-7 shadow-2xl">
                  <h3 className="text-[#1B75BB] text-center">{project.title}</h3>
                </div>
              </div>
              {/* <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            /> */}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
