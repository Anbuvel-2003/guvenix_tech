import React from "react";
import { Rate } from "antd";
import Marquee from "react-fast-marquee";
import Faq from "./faq";

function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Jane Cooper",
      img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 5,
      designation: "Frontend Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      name: "Cody Fisher",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "Backend Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      name: "Esther Howard",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 4,
      name: "Lindsay Walton",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 5,
      name: "Cody Fisher",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 6,
      name: "Esther Howard",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 7,
      name: "Lindsay Walton",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "Full Stack Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 8,
      name: "Cody Fisher",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 9,
      name: "Esther Howard",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "Full Stack Developer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 10,
      name: "Lindsay Walton",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 11,
      name: "Cody Fisher",
      img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
      rating: 4,
      designation: "UI/UX Designer",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];
  return (
    <div>
      <section className="!py-12 bg-gray-50 sm:!py-16 lg:!py-20 flex justify-center">
        <div className="!px-4 mx-auto max-w-7xl sm:!px-6 lg:!px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 font-pj">
                2,157 people have said how good Rareblocks
              </p>
              <h2 className="!mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Our happy clients say about us
              </h2>
            </div>

            <div className="!mt-8 text-center md:!mt-16 md:order-3">
              <a
                href="#"
                title=""
                className="!pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
              >
                Check all 2,157 reviews
              </a>
            </div>

            <div className="relative !mt-10 md:!mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div>

              {/* Cards */}

              <Marquee pauseOnHover={true} speed={40}>
                <div className=" flex !gap-20 lg:!mx-10 md:!mx-15 !mx-10 !pb-10 ">
                  {data.map((item) => (
                    <div className="flex flex-col w-full max-w-sm overflow-hidden shadow-xl">
                      <div className="flex flex-col justify-between flex-1 !p-6 bg-white lg:!py-8 lg:!px-7">
                        <div className="flex-1">
                          <div className="flex items-center">
                            {/* 5 stars */}
                            <Rate disabled allowHalf value={item.rating} />
                          </div>

                          <blockquote className="flex-1 !mt-8">
                            <p className="text-lg leading-relaxed text-gray-900 font-pj">
                              {item.review}
                            </p>
                          </blockquote>
                        </div>

                        <div className="flex items-center !mt-8">
                          <img
                            src={item.img}
                            alt=""
                            className="flex-shrink-0 object-cover object-center w-10 h-10 rounded-full"
                          />
                          <div className="!ml-4">
                            <p className="text-base font-bold text-gray-900 font-pj">
                              {item.name}
                            </p>
                            <p className="!mt-0.5 text-sm font-pj text-gray-600">
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      {/* <section class="!py-12 bg-white sm:!py-16 lg:!py-20 flex justify-center">
    <div class="!px-4 mx-auto max-w-7xl sm:!px-6 lg:!px-8">
        <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                Make every step user-centric
            </h2>
            <p class="!mt-4 text-base leading-7 text-gray-600 sm:!mt-8 font-pj">
                Lorem ipsum dolor sit amet, consectetur adipis elit
            </p>
        </div>

        <div class="grid grid-cols-1 !mt-10 text-center sm:!mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:!mt-24">
            <div class="md:!p-8 lg:!p-14">

                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Support</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">
                    Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
                </p>
            </div>

            <div class="md:!p-8 lg:!p-14 md:border-l md:border-gray-200">


                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Sales</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet...</p>
            </div>

            <div class="md:!p-8 lg:!p-14 md:border-l md:border-gray-200">

                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Onboarding</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet...</p>
            </div>

            <div class="md:!p-8 lg:!p-14 md:border-t md:border-gray-200">

                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Product</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet...</p>
            </div>

            <div class="md:!p-8 lg:!p-14 md:border-l md:border-gray-200 md:border-t">

                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Quality</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet...</p>
            </div>

            <div class="md:!p-8 lg:!p-14 md:border-l md:border-gray-200 md:border-t">

                <h3 class="!mt-12 text-xl font-bold text-gray-900 font-pj">Result</h3>
                <p class="!mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
    </div>
</section> */}
    </div>
  );
}

export default Testimonial;
