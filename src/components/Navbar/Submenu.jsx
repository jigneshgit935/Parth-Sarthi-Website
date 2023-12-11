'use client';

import React, { useEffect, useState } from 'react';
import './submenu.css';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

const Submenu = () => {
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
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
      className={`bg-white w-full  border z-20 sticky top-0  transition-transform duration-300 ${show}`}
    >
      <nav className={isActive ? 'active' : ''}>
        <div onClick={handleMenuClick} className="menu-icons">
          <RxHamburgerMenu className="fa-bars text-black " />
          <GrClose className="fa-times text-black" />
        </div>

        <Link href={'/'} className="border">
          <h2>Parth Sarthi</h2>
        </Link>
        <ul className="nav-list">
          <li>
            <a href="#" className="">
              Our Story
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#" className="">
                  About Us
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link onClick={handleMenuClick} href="company-overview">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuClick} href="company-logo">
                      Logo
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuClick} href="company-vision">
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleMenuClick} href="company-awards">
                      Awards
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="">
                  Management And Leadership
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link
                      onClick={handleMenuClick}
                      href="vikram-choudhary-parth-sarthi"
                    >
                      Vikram Singh Parth
                    </Link>
                  </li>
                  <li>
                    <a href="#">Navin M Raheja</a>
                  </li>
                  <li>
                    <a href="#">From the desk</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Our Projects <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
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
              Career
              <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
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
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Submenu;
