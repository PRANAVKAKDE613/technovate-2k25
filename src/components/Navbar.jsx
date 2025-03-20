import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "./Navbar.css";

const Header = styled.header`
  &.scroll-down {
    margin-top: 0;
    transform: translate3d(-50%, -120%, 0);
  }
`;

const Navbar = ({ reference, scrollToSection }) => {
  const [scrollDirection, setScrollDirection] = useState('');
  const [lastScroll, setLastScroll] = useState(0);
  const [activeLink, setActiveLink] = useState('home'); // Initially setting the home link as active

  useEffect(() => {
    const handleScroll = () => { 
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setScrollDirection('');
        return;
      }

      if (currentScroll > lastScroll && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScroll < lastScroll && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScroll, scrollDirection]);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <Header className={scrollDirection === 'down' ? 'scroll-down' : scrollDirection === 'up' ? 'scroll-up' : ''}>
        <div
          className={`links link1 ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('home');
            scrollToSection(reference.home);
          }}
        >
          HOME
        </div>
        <div
          className={`links link2 ${activeLink === 'events' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('events');
            scrollToSection(reference.events);
          }}
        >
          EVENTS
        </div>
         <div
          className={`links link3 ${activeLink === 'sponsors' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('sponsors');
            scrollToSection(reference.sponser);
          }}
        >
          SPONSORS
        </div> 
        <div
          className={`links link4 ${activeLink === 'Glimpse' ? 'active' : ''}`}
          onClick={() => {
            handleSetActiveLink('glimpse');
            scrollToSection(reference.glimpse);
          }}
        >
          Glimpse
        </div>
      </Header>
    </div>
  );
};

export default Navbar;