import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPhone, FaGlobe } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import MoveImage from '../../public/images/company-overview-move.jpg';

import ManagementImage from '@/../public/images/Contact-us.jpg';

const ContactForm = () => {
  return (
    <>
      <div>
        <div className="relative">
          <Image
            src={ManagementImage}
            alt="company-overview"
            className="w-full h-full lg:h-[500px] object-cover"
          />
          <button className="text-white font-semibold text-xl py-3 px-[30px] absolute bg-[#C4956A] hidden md:block top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4">
            Call Now: (+91) - 7770004444
          </button>
        </div>
        <div className="px-5 md:px-[70px] md:pb-[80px] py-10">
          <div>
            <h2 className="text-2xl font-medium">Got a question ?</h2>
            <p className="text-[15px] font-medium text-gray-600">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>
          </div>

          <div className="mt-10 flex">
            <div className="flex-1 hidden md:block ">
              <div className="">
                <h2 className="text-2xl font-bold">Corporate Office</h2>
                <p className="text-[17px] font-semibold mt-10 [text-[#333]">
                  Raheja Mall, 3rd Floor, Sector-47, Sohna Road,
                  <br /> Gurugram - 122001
                </p>
                <ul className="flex flex-col gap-2 mt-5">
                  <li className="text-[15px] font-medium flex items-center">
                    <span className="mr-2">
                      <FaPhone />
                    </span>
                    +91-7770004444
                  </li>
                  <li className="text-[15px] font-medium flex items-center">
                    <span className="mr-2">
                      <IoMdMail />
                    </span>
                    marketing@raheja.com
                  </li>
                  <li className="text-[15px] font-medium flex items-center">
                    <span className="mr-2">
                      <FaGlobe />
                    </span>
                    www.raheja.com
                  </li>
                </ul>
                <div className="mt-16">
                  <h2 className="text-2xl font-bold">Registered Office</h2>
                  <p className="text-[17px] font-semibold mt-10 [text-[#333]">
                    W4D - 204/5, Keshav Kunj Western Avenue, Sainik Farms New
                    <br />
                    Delhi - 110062
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block ">
              <Image
                src={MoveImage}
                alt="move-image"
                className="top-[1100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute object-fill"
              />
            </div>
            <div className="flex-1">
              <div className="px-0 sm:px-16 md:px-3 lg:px-12">
                <div>
                  <h2 className="text-2xl font-bold">Get In Touch</h2>
                  <p className="text-[15px] mt-5 font-bold text-[#C4956A]">
                    Our Expert Will Contact You Soon
                  </p>
                  <div className="bg-[#363435] px-10 py-16 mt-12 rounded-md w-full text-white">
                    <form className="flex flex-col gap-5">
                      <div className="flex flex-col ">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="bg-transparent px-3 py-3 outline-none border-b border-gray-500"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-transparent px-3 py-3 outline-none border-b border-gray-500"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label>Phone</label>
                        <input
                          type="number"
                          placeholder="Enter your phone"
                          className="bg-transparent px-3 py-3 outline-none border-b border-gray-500"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label>Message</label>
                        <textarea
                          type="text"
                          placeholder="Message..."
                          className="bg-transparent px-3 py-3 outline-none border-b border-gray-500"
                          rows={4}
                        ></textarea>
                      </div>
                      <div className="mt-10">
                        <button className="py-3 px-[55px] bg-[#C4956A]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
