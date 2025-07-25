import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isLogged, user, logoutUser, loading } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => {
    setIsSidebarOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const removeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
    removeSidebar();
  };

  const scrollToAbout = () => {
    navigate('/');
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    removeSidebar();
  };

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    removeSidebar();
  };

  console.log("Navbar Auth State:", { user, isLogged, loading });

  return (
    <div className='w-full m-0 p-0 overflow-hidden'>
      <div className='flex justify-around bg-gradient-to-r from-[#0f766e] to-[#1e3a8a] w-full h-[60px] items-center max-md:justify-between'>
        <Link to='/' className='hover:text-blue-400 max-md:mx-1'>Home</Link>
        <button onClick={scrollToAbout} className='hover:text-blue-400 max-md:hidden'>About us</button>
        <button onClick={scrollToContact} className='hover:text-blue-400 max-md:hidden'>Contact us</button>

        {!loading && isLogged && (
          <Link to='/my-issues' className='hover:text-blue-400 max-md:hidden'>My Issue</Link>
        )}

        <div className='max-md:hidden'>
          {!loading && isLogged ? (
            <button
              onClick={handleLogout}
              className='rounded-full bg-red-200 px-5 py-1 hover:bg-red-400 cursor-pointer'
            >
              Logout
            </button>
          ) : !loading && (
            <Link to="/login">
              <button className='rounded-full bg-green-200 px-5 py-1 hover:bg-green-400 cursor-pointer'>
                Login
              </button>
            </Link>
          )}
        </div>

        <GiHamburgerMenu onClick={showSidebar} className='max-md:mx-1 md:hidden cursor-pointer' />
      </div>

      {/* Sidebar for mobile */}
      <div
        id="sidebar"
        className={`fixed top-0 right-0 h-full transition-all duration-300 ease-in-out z-50 flex flex-col gap-6 items-center justify-center backdrop-blur-lg bg-yellow-50 ${
          isSidebarOpen ? 'w-[260px] opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none'
        }`}
      >
        <RxCross2 onClick={removeSidebar} style={{ width: 26, height: 26 }} className='absolute top-2 right-2 cursor-pointer' />
        <Link to='/' className='hover:text-blue-400' onClick={removeSidebar}>Home</Link>
        <button onClick={scrollToAbout} className='hover:text-blue-400'>About us</button>
        <Link to='/contact' className='hover:text-blue-400' onClick={removeSidebar}>Contact us</Link>
        {!loading && isLogged && (
          <Link to='/my-issues' className='hover:text-blue-400' onClick={removeSidebar}>My Issue</Link>
        )}

        {!loading && isLogged ? (
          <button onClick={handleLogout} className='rounded-full bg-red-200 px-5 py-1 hover:bg-red-400 cursor-pointer'>
            Logout
          </button>
        ) : !loading && (
          <Link to="/login" onClick={removeSidebar}>
            <button className='rounded-full bg-green-200 px-5 py-1 hover:bg-green-400 cursor-pointer'>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;





