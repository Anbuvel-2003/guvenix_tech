import React from 'react'
import banner from "../assets/img/servicesBanner.png"
import img1 from "../assets/img/service-1.png";
import img2 from "../assets/img/service-2.png";
import img3 from "../assets/img/service-3.png";
import img4 from "../assets/img/service-4.png";
import img5 from "../assets/img/service-5.png";
import img6 from "../assets/img/service-6.png";



const things = [
  {
    id: 1,
    img: img1,
    title: "UI /UX DESIGN",
    desc: "We build digital strategies that align business goals with scalable tech solutions from concept to deployment.",
  },
  {
    id: 2,
    img: img2,
    title: "WEB APPLICATION",
    desc: "End-to-end management of complex tech projects with a focus on timelines, quality, and innovation.",
  },
  {
    id: 3,
    img: img3,
    title: "MOBILE APPLICATION",
    desc: "Custom system design for SaaS, apps, and platforms structured for speed, security, and scale.",
  },
  {
    id: 4,
    img: img4,
    title: "SASS PRODUCT",
    desc: "Expert guidance to streamline infrastructure, improve workflows, and digitally future-proof your operations.",
  },
  {
    id: 5,
    img: img5,
    title: "TESTING",
    desc: "From wireframes to full-stack builds, we craft modern web and mobile experiences that perform and convert.",
  },
  {
    id: 6,
    img: img6,
    title: "DEVOPS",
    desc: "Digital campaigns driven by analytics built to increase visibility, drive leads, and grow revenue.",
  }
];

function Services() {
  return (
      <div className="md:!pt-15 sm:!pt-10">

              {/* what we do */}

      <div className='!mt-20 !mb-1'>
        <p className="text-[#104CBA] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-manrope text-center font-semibold leading-8 sm:leading-10">
          What We Do
        </p>
        <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[40px] font-bold font-manrope text-center text-[#0E1F51] !mb-8 sm:!mb-12 md:!mb-16">
          Providing the best solutions in the Industry
        </p>
        {/* Services Grid */}
        <div className="lg:!mb-30 md:!mb-40 !mb-25" >
          <div div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 !gap-30 !px-6 lg:!px-15 justify-center place-self-center" >
            {
              things.map((thing) => (
                <div key={thing.id} className="relative group cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={thing.img}
                    alt="service"
                    className="rounded-2xl w-fit h-auto  group-hover:brightness-50"
                  />
                  <div className=' top-0 left-0 lg:!pb-20'>

                    {/* White Card */}
                    <div className="absolute top-30 lg:right-0  right-0 transform lg:translate-y-1/2  bg-white rounded-2xl shadow-2xl !px-5 !py-6 w-full max-w-[300px] transition-transform duration-300 group-hover:translate-y-6">
                      <h3 className="text-[#0E1F51] text-xl font-semibold !mb-2 hover:text-red-400">
                        {thing.title}
                      </h3>
                      <p className="text-[#696969] text-md leading-relaxed lg:!h-25 ">
                        {thing.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      </div>
  )
}

export default Services