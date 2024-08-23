'use client';

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const LandingPage: React.FC = () => {
  const [circles, setCircles] = useState<Array<{ x: number; y: number; size: number; color: string }>>([]);

  useEffect(() => {
    const createCircles = () => {
      const newCircles = [];
      for (let i = 0; i < 15; i++) {
        newCircles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          color: 'rgba(255, 255, 255, 0.1)', // Soft white color for subtle effect
        });
      }
      setCircles(newCircles);
    };

    createCircles();

    const animation = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          y: (circle.y + 0.5) % window.innerHeight, // Slow vertical movement
          x: (circle.x + Math.sin(circle.y / 100)) % window.innerWidth, // Slight horizontal movement
        }))
      );
    }, 50);

    return () => clearInterval(animation);
  }, []);

  // Animation for the second and third paragraphs
  const animatedParagraphs = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200, // Delay the animation
    config: { duration: 500 }, // Adjust animation duration
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-purple-500 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {circles.map((circle, index) => (
          <div key={index}
            className="absolute rounded-full"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              backgroundColor: circle.color,
              left: `${circle.x}px`,
              top: `${circle.y}px`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(6px)',
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold mb-4 bg-transparent">
          Welcome to Adrian CIMS
        </h1>
      </div>
      <animated.p style={animatedParagraphs} className="text-xl mb-4 break-words bg-transparent">
        Simplify your customer management and loan processes with Adrian CIMS.
      </animated.p>
      <animated.p style={animatedParagraphs} className="text-xl mb-4 break-words bg-transparent">
        Experience seamless data organization, efficient loan tracking, and enhanced customer engagement.
      </animated.p>
      <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis deserunt, nisi blanditiis rem voluptatem et
        <br /> perferendis explicabo, harum at sint dolor? Aperiam deserunt blanditiis, dignissimos quos esse odio ipsam eaque.</p>

      <div className="flex gap-8 mt-8 z-10">
        <a
          href="/login"
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
        >
          Login
        </a>
        <a
          href="/sign-up"
          className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition duration-300 ease-in-out"
        >
          Sign Up
        </a>
      </div>

      <footer className="absolute bottom-4 text-center w-full z-10">
        <p className="text-sm text-gray-200">
          © 2024 Adrian CIMS. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
