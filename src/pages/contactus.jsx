import React from "react";
import contactus from "../assets/contactus.png";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, "Name must be at most 30 characters")
    .required("Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile must be exactly 10 digits")
    .required("Mobile is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
});
function Contactus() {
  return (
    <div className="md:!mt-18 !mt-15  ">
      <div>
        <img src={contactus} className="w-screen h-auto" />
      </div>
      <div>
        <div className="!my-20">
          <div className="flex items-center justify-center flex-col lg:!my-10">
            <h3 className="text-[#000] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-semibold">
              Connect With our <span className="text-[#1B75BB]">team!</span>
            </h3>
            <h2 className="text-[#000] lg:text-[30px] ms:text-[25px] sm:text-[20px] text-[16px]  font-light text-center">
              Reach out to us! We're here to discuss your projects, brainstorm
              ideas and answer any questions you might have
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 !mx-10">
            <div className="bg-[#F7F7F7] !p-10 rounded-[10px]">
              <h3 className="text-center lg:text-[30px] md:text-[20px] text-[20px] text-[#1B75BB]">
                Have a great idea ?
              </h3>
              <h5 className="!py-3 text-center text-[20px] text-[#3F3F3F]">
                9677395645
              </h5>
              <h4 className="text-center text-[20px] text-[#000]">
                Tell Us more about your business idea to get consulted
              </h4>
            </div>
            <div className="bg-[#F7F7F7] !p-10 rounded-[10px]">
              <h3 className="text-center lg:text-[30px] md:text-[20px] text-[20px] text-[#1B75BB]">
                Got questions to ask ?
              </h3>
              <h5 className="!py-3 text-center text-[20px] text-[#3F3F3F]">
                guvenix1606@gmail.com
              </h5>
              <h4 className="text-center text-[20px] text-[#000]">
                Discuss your projects with us. We're open to question
              </h4>
            </div>
            <div className="bg-[#F7F7F7] !p-10 rounded-[10px]">
              <h3 className="text-center lg:text-[30px] md:text-[20px] text-[20px] text-[#1B75BB]">
                Looking for collaboration ?
              </h3>
              <h5 className="!py-3 text-center text-[20px] text-[#3F3F3F]">
                8270320393
              </h5>
              <h4 className="text-center text-[20px] text-[#000]">
                Let’s explore how we can work together on amazing ideas
              </h4>
            </div>
          </div>
        </div>
        <div className="text-center font-bold !m-10">
          <h4 className="lg:text-[24px] md:text-[20px] text-[20px] text-[#1B75BB]">
            Get in Touch
          </h4>
          <h2 className="lg:text-[40px] md:text-[30px] text-[25px] text-[#194365]">
            Hey! Let's Talk
          </h2>
        </div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2  gap-10 !px-10 lg:!px-20 !my-20">
          <div>
            <div>
              <p className="lg:text-[58px] md:text-[30px] text-[20px] font-bold font-manrope text-[#1B75BB] ">
                Contact Us
              </p>
              <p className="lg:text-[20px] md:text-[18px] text-[16px] font-manrope lg:w-3/4 md:w-3/4 w-full !pb-5 text-[#696969] ">
                We’d love to hear from you! Whether you have a question, need
                expert advice, or want to start a project — our team is ready to
                help
              </p>
            </div>

            {/* Contact Info */}
            <div>
              {/* Email */}
              <div className="flex !gap-6 lg:!pb-10 md:!pb-5 !pb-5">
                <div className="flex items-center justify-center rounded-xl bg-[#F7F7F7]">
                  <MdOutlineEmail size={30} color="#1B75BB" />
                </div>
                <a
                  href="mailto:connect@gmail"
                  className="text-[#0E1F51] text-sm lg:text-base"
                >
                  connect@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex !gap-6 lg:!pb-10 md:!pb-5 !pb-5">
                <div className="flex items-center justify-center rounded-xl  bg-[#F7F7F7]">
                  <MdOutlineLocationOn size={30} color="#1B75BB" />
                </div>
                <a
                  href="#"
                  target="_blank"
                  className="text-[#0E1F51] text-sm lg:text-base"
                >
                  20 Island Park Road, New Jearsy, New York, USA
                </a>
              </div>

              {/* Phone */}
              <div className="flex !gap-6 !pb-5">
                <div className="flex items-center justify-center rounded-xl  bg-[#F7F7F7]">
                  <BsTelephoneOutbound size={30} color="#1B75BB" />
                </div>
                <a
                  href="tel:9874563210"
                  className="text-[#0E1F51] text-sm lg:text-base"
                >
                  9874563210
                </a>
              </div>

              {/* Follow Us */}
              <div className="!mt-8">
                <p className="text-[#1B75BB] lg:text-[24px] md:text-[22px] text-[20px] font-medium">
                  Follow Us
                </p>
                <div className="flex !gap-5 !pt-5">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <GrLinkedinOption
                      size={15}
                      color="white"
                      className="bg-[#1B75BB] rounded-lg h-12 w-12 !p-3"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram
                      size={15}
                      color="white"
                      className="bg-[#1B75BB] rounded-lg h-12 w-12 !p-3"
                    />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF
                      size={15}
                      color="white"
                      className="bg-[#1B75BB] rounded-lg h-12 w-12 !p-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className=" lg:!mt-10 ">
            {/* Form */}
            <Formik
              initialValues={{ name: "", mobile: "", email: "", address: "" }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form Submitted", values);
                resetForm();
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="!space-y-6">
                  {/* Name */}
                  <div className="relative !mb-6">
                    <Field
                      type="text"
                      name="name"
                      placeholder=" "
                      className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#1B75BB]"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1B75BB] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                    >
                      Name
                    </label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm !mt-1"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="relative !mb-6">
                    <Field
                      type="text"
                      name="mobile"
                      placeholder=" "
                      maxLength="10"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Tab"
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#1B75BB]"
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1B75BB] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                    >
                      Mobile
                    </label>
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-500 text-sm !mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative !mb-6">
                    <Field
                      type="email"
                      name="email"
                      placeholder=" "
                      className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#1B75BB]"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1B75BB] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                    >
                      Email
                    </label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm !mt-1"
                    />
                  </div>

                  {/* Address */}
                  <div className="relative !mb-6">
                    <Field
                      as="textarea"
                      name="address"
                      rows="4"
                      placeholder=" "
                      className="peer w-full bg-[#F6F6F6] focus:bg-white border-0 text-gray-900 rounded-md !px-3 !py-3 focus:outline-none focus:ring-2 focus:ring-[#1B75BB]"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-3 !px-1 text-gray-500 text-md transition-all bg-[#F6F6F6]
            peer-placeholder-shown:top-3 peer-placeholder-shown:text-md
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#1B75BB] peer-focus:bg-white
            peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white
            z-10"
                    >
                      Address
                    </label>
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm !mt-1"
                    />
                  </div>

                  {/* Submit */}
                  <div
                    onClick={() => navigate("/")}
                    className="group flex justify-center items-center rounded-xl bg-[#1B75BB] text-white
                                  lg:h-15 lg:w-50 h-10 md:h-12 md:w-40 w-40 cursor-pointer transition-colors duration-300
                                  hover:bg-white hover:text-[#1B75BB] hover:border-2 hover:border-[#1B75BB] !gap-2"
                  >
                    <button className="lg:text-[22px] font-semibold md:text-[16px] text-[14px] transition-colors duration-300">
                      Contact us
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
