import React from 'react'
import aboutus from '../assets/aboutus.png'
import aboutus1 from '../assets/aboutus1.png'
import aboutus2 from '../assets/aboutus2.png'
import aboutus3 from '../assets/aboutus3.png'
import Step from './components/steps'

function Aboutus() {


  const software = [
    {
      image: aboutus1,
      title: "Design & Development",
      description:
        "We craft intuitive interfaces and engineer robust backends using agile sprints. Each module is carefully built, tested, and refined for performance and scalability.",
      p1: " Where design meets functionality.",
      p2: " From wireframes to final code, we develop solutions that are beautiful, responsive, and structured to grow with your evolving product needs.",
    },
    {
      image: aboutus2,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business model, goals, and user needs. Through research, we define a clear roadmap with features, timelines, and aligned priorities.",
      p1: "Your vision, strategically mapped.",
      p2: "A strong discovery phase ensures we build software with purpose, solving real problems and aligning perfectly with your long-term business goals.",
    },
    {
      image: aboutus1,
      title: "Design & Development",
      description:
        "We craft intuitive interfaces and engineer robust backends using agile sprints. Each module is carefully built, tested, and refined for performance and scalability.",
      p1: "Where design meets functionality.",
      p2: "From wireframes to final code, we develop solutions that are beautiful, responsive, and structured to grow with your evolving product needs.",
    },
    {
      image: aboutus3,
      title: "Testing, Deployment & Maintenance",
      description:
        "We perform rigorous QA and security testing before deployment. After launch, we offer ongoing support, updates, and maintenance to keep things running smoothly.",
      p1: "Built, launched, and backed.",
      p2: "Post-deployment, we remain your tech partner—ensuring stability, improving performance, and helping you iterate fast as your business grows.",
    },
  ];



  return (

    <div className="md:!mt-18 !mt-15  ">
      <div>
        <img src={aboutus} className="w-full" />
      </div>

      {/* how we work */}

      <section>

        <div className='flex flex-col w-full justify-center !py-10 !px-10'>
          <div className=' '>
            <p className='text-[#1B75BB] lg:text-[24px] md:text-[20px] text-[16px] font-manrope text-center font-semibold lg:leading-10 md:leading-10 leading-10'>
              How we work
            </p>
          </div>
          <div className='!pb-16'>
            <p className='lg:text-[40px] md:text-[30px] text-[20px] font-bold font-manrope text-center lg:leading-18 md:leading-10 leading-8 text-[#194365]'>
              Explain the Development Process
            </p>
          </div>
          <div className='lg:!pl-20'>
            <Step />
          </div>
        </div>

      </section>

      <section>

        <div>
          <div className="!py-10 place-items-center">
            <h1 className="w-20 h-1 bg-[#1B75BB] rounded-xl lg:!mb-5 !mb-10"></h1>
            <h1 className="!pb-3 lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#1A202C] font-manrope ">
              Way of building
            </h1>
            <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#1A202C] font-manrope font-bold lg:!pb-0 !pb-10">
              Great Software
            </h1>
          </div>
          <div className="flex flex-col lg:!pl-20 md:!px-20 !px-10 sm:!pt-0 font-manrope  leading-8">

            {software.map((item, index) => {
              const isEven = index % 2 === 0; // check position
              return (
                <div
                  key={index}
                  className={`flex ${isEven
                      ? "lg:flex-row md:flex-col-reverse flex-col-reverse"
                      : "lg:flex-row-reverse md:flex-col-reverse flex-col-reverse"
                    } self-center lg:!py-10 !py-5`}
                >
                  {/* Image */}
                  <div className="w-full place-items-center lg:h-[60vh] md:h-[80vh]">
                    <img
                      alt={item.title || ""}
                      src={item.image}
                      className="w-[100%] h-[100%] object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="self-center lg:w-full w-fit lg:!pl-5">
                    <h1 className="lg:text-[28px] md:text-[24px] text-[20px] text-[#1A202C] font-semibold manrope">
                      {item.title}
                    </h1>
                    <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-5 !py-3 font-manrope">
                      {item.description}
                    </p>
                    <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-2 !py-2 font-manrope">
                      {item.p1}
                    </p>
                    <div className="lg:text-[16px] md:text-[16px] text-[14px] lg:!py-6 !py-4">
                      <p className="text-[#AD46FF] border-r-3 border-[#AD46FF] font-manrope">
                        {item.p2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}


          </div>
        </div>

      </section>


    </div>
  )
}

export default Aboutus