'use client';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link';


// Keyframes for text animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/path-to-your-image.jpg') no-repeat center center/cover;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay */
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 3rem;
    animation: ${fadeIn} 1s ease-in-out;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    animation: ${fadeIn} 2s ease-in-out;
  }

  button {
    margin-top: 2rem;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #0070f3;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    animation: ${fadeIn} 3s ease-in-out;

    &:hover {
      background-color: #005bb5;
    }
  }
`;

const HeroSection = () => {
  const [backgroundType, setBackgroundType] = useState('image');

  useEffect(() => {
    // Change this to 'video' if you want to use a video background
    setBackgroundType('video'); // or 'video'
  }, []);

  return (
    <HeroSectionWrapper>
      {backgroundType === 'video' && (
        <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src='https://videos.pexels.com/video-files/3941287/3941287-sd_640_360_30fps.mp4' type="video/mp4" />
        </video>
      )}
      <HeroContent>
        <h1>Welcome to Campus Event Management</h1>
        <p>Organize, manage, and participate in campus events with ease.</p>
        <Link href="/Login">
        
        <button>Get Started</button>
        </Link>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
