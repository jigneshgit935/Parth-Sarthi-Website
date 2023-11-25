'use client';

import React, { useState } from 'react';
import './submenu.css';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaChevronDown } from 'react-icons/fa';

const Submenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="">
      <div class=" container flex items-center">
        <div className="md:w-[240px] w-[400px] text-3xl px-2">Parth Sarthi</div>
        <nav className={isActive ? 'active' : ''}>
          <div onClick={handleMenuClick} class="menu-icons">
            <RxHamburgerMenu className="fa-bars text-black " />
            <GrClose className="fa-times text-black" />
          </div>
          <ul class="nav-list">
            <li>
              <a href="#" className="">
                Our Story
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#" className="">
                    About Us
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Logo</a>
                    </li>
                    <li>
                      <a href="#">Vision</a>
                    </li>
                    <li>
                      <a href="#">Awards</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="">
                    Management And Leadership
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">Ar Nayan Raheja</a>
                    </li>
                    <li>
                      <a href="#">Navin M Raheja</a>
                    </li>
                    <li>
                      <a href="#">From the desk</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">CSR & Sustainbility</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">Raheja Wildlife</a>
                    </li>
                    <li>
                      <a href="#">Raheja CSR</a>
                    </li>
                    <li>
                      <a href="#">Raheja music</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Our Projects <i class="fas fa-caret-down"></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#">New Launch</a>
                </li>
                <li>
                  <a href="#">Residential Ready To Move In</a>
                </li>
                <li>
                  <a href="#">Residential Under Construction</a>
                </li>
                <li>
                  <a href="#">Commercial Ready To Move In</a>
                </li>
                <li>
                  <a href="#">Commercial Under Construction</a>
                </li>
                <li>
                  <a href="#">Plots Residential</a>
                </li>
                <li>
                  <a href="#">SCO Plots</a>
                </li>
                <li>
                  <a href="#">Large Investment Options</a>
                </li>
                <li>
                  <a href="#">Luxury Projects</a>
                </li>
                <li>
                  <a href="#">Premium Projects</a>
                </li>
                <li>
                  <a href="#">Affordable Residential</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Buy Online</a>
            </li>
            <li>
              <a href="#">
                Online Registration
                <i class="fas fa-caret-down"></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#">Real Estate Agent</a>
                </li>
                <li>
                  <a href="#">Contractor & Supplier Registration</a>
                </li>
                <li>
                  <a href="#">Ambassador Club</a>
                </li>
                <li>
                  <a href="#">Worker Enrollment</a>
                </li>
                <li>
                  <a href="#">Real Estate Agent/ Customer Login</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                Career
                <i class="fas fa-caret-down"></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <a href="#">Human Resources</a>
                </li>
                <li>
                  <a href="#">Human Resources Activity</a>
                </li>
                <li>
                  <a href="#">All Job</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Submenu;
