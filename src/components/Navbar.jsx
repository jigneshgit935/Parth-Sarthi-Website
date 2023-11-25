'use client';

import React, { useEffect, useState } from 'react';

import Logo from '@/../public/images/parth-logo.JPG';

import './Trial/submenu.css';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('-translate-y-[80px]');
      } else {
        setShow('shadow-sm');
      }
    } else {
      setShow('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header
      className={`w-full h-[50px] md:h-[80px]  bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div>
        <img src={Logo} />
      </div>
      <header className="border-2">
        <nav className={isActive ? 'active shadow-lg' : ''}>
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
      </header>
      <div onClick={handleMenuClick} class="menu-icons">
        <RxHamburgerMenu className="fa-bars text-black " />
        <GrClose className="fa-times text-black" />
      </div>
    </header>
  );
};

export default Navbar;
