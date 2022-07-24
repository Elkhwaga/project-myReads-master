import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBookReader, FaChevronLeft } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';

const mainNav = [
  {
    display: 'Home',
    path: '/',
  },
];

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navbarRef.current.classList.add('shrink');
      } else {
        navbarRef.current.classList.remove('shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll', navbarRef);
    };
  }, []);

  const { pathname } = useLocation();
  const activeLink = mainNav.findIndex((e) => e.path === pathname);
  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle('active');

  return (
    <nav className='container' ref={navbarRef}>
      <div className='left'>
        <div className='logo'>
          <Link to='/'>
            <FaBookReader size={35} />
            MyRead
          </Link>
        </div>
      </div>

      <div className='nav-menu-mobile' onClick={menuToggle}>
        <MdMenuOpen size={35} />
      </div>
      <div className='right' ref={menuLeft}>
        <div className='nav-menu-close' onClick={menuToggle}>
          <FaChevronLeft size={35} />
        </div>
        {mainNav.map((item, index) => (
          <div
            key={index}
            className={`right-item ${index === activeLink ? 'active' : ''}`}
            onClick={menuToggle}
          >
            <Link to={item.path}>
              <span>{item.display}</span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
