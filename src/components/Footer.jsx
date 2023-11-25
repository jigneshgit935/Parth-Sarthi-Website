import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#282828]">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl my-4 text-white font-semibold">
            Parth Sarthi
          </h1>
        </div>
        <div className="border-t border-b md:mx-12 mx-5 border-white/10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className=" max-w-[300px] w-[100%]">
            <div className="py-4">
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  Our Story
                </h2>
                <ul className="text-sm text-white/40 capitalize flex flex-col gap-y-1 my-4">
                  <li>Profile</li>
                  <li>Vision</li>
                  <li>Logo</li>
                  <li>Awards</li>
                </ul>
              </div>
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  MANAGEMENT & LEADERSHIP
                </h2>
                <ul className="text-sm text-white/40 capitalize flex flex-col gap-y-1 my-4">
                  <li>Ar Nayan Raheja</li>
                  <li>Navin M Raheja</li>
                  <li>From The Desk</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" max-w-[300px] w-[100%]">
            <div className="py-4">
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  BECOME OUR PARTNERS
                </h2>
                <ul className="text-sm text-white/40 capitalize flex flex-col gap-y-1 my-4">
                  <li>Real Estate Agent Empanelment</li>
                  <li>Contractor & Supplier Registration</li>
                  <li>Ambassador Club</li>
                  <li>Worker Enrollment</li>
                  <li>Customer Login</li>
                </ul>
              </div>
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  WEBSITE POLICIES
                </h2>
                <ul className="text-sm text-white/40 capitalize flex flex-col gap-y-1 my-4">
                  <li>Privacy Policy</li>
                  <li>Terms And Conditions</li>
                  <li>Refund & Cancellation Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" max-w-[300px] w-[100%]">
            <div className="py-4">
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  OUR PROJECTS
                </h2>
                <ul className="text-sm text-white/40 capitalize flex flex-col gap-y-1 my-4">
                  <li>New Launch</li>
                  <li>Residential Ready To Move In</li>
                  <li>Residential Under Construction</li>
                  <li>Commercial Ready To Move In</li>
                  <li>Commercial Under Construction</li>
                  <li>Plots - Residential</li>
                  <li>SCO Plots</li>
                  <li>Large Investment Options</li>
                  <li>Luxury Projects</li>
                  <li>Premium Projects</li>
                  <li>Affordable Residential</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" max-w-[300px] w-[100%]">
            <div className="py-4">
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  FIND US
                </h2>
                <ul className="text-sm text-white/40 flex flex-col gap-y-1 my-4">
                  <li>Buy Online</li>
                  <li>Blogs</li>
                  <li>Careers</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  Contact Us
                </h2>
                <ul className="text-sm text-white/40 flex flex-col gap-y-1 my-4">
                  <li>Phone No. +91-8722108722</li>
                </ul>
              </div>
              <div>
                <h2 className="text-[16px] font-semibold uppercase text-white">
                  SOCIAL WITH US:
                </h2>
                <ul className="text-sm text-white flex flex-row gap-x-3 my-4">
                  <li className="">
                    <span>
                      <FaFacebookF size={22} />
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <FaInstagram size={22} />
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <FaLinkedinIn size={22} />
                    </span>
                  </li>
                  <li className="">
                    <span>
                      <FaYoutube size={22} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-12 mx-5 py-3">
          <div className="flex justify-between xl:flex-row flex-col text-center md:text-start">
            <ul className="text-sm text-white/40 flex flex-row gap-x-4 mx-auto xl:mx-0 ">
              <li>Disclaimer</li>
              <li>Emi Calculator</li>
            </ul>
            <p className="text-sm text-white/40 xl:mt-0 mt-2">
              © Copyright 2022, all Rights reserved with Raheja Developers Ltd.
              Crafted by GTF Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
