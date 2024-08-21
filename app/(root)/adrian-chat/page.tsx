'use client';

import Image from 'next/image';
import Navbar from '../../../components/navbar';
import Chatheader from '../../../components/navbar-sm';
import PageLayout from '@/components/pagelayout';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import { useSession } from "next-auth/react"; // Temporarily commented out
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import Chat from '../../../components/ui/chat'

const ChatBot = () => {
  const router = useRouter();
  // const { data: session, status } = useSession(); // Temporarily commented out
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => { // Temporarily commented out
  //   if (status === "unauthenticated") {
  //     // Bypass authentication for "Laurent"
  //     if (session?.user?.username === "Laurent") {
  //       return; // Allow Laurent to access the page
  //     } else {
  //       router.push("/home");
  //     }
  //   }
  // }, [status, router, session]); // Temporarily commented out

  useEffect(() => {
    const storedMode = localStorage.getItem("dark-mode") === "true";
    setDarkMode(storedMode);
    if (storedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("dark-mode", newMode ? "true" : "false"); 
      return newMode;    
    });
  };

  // if (status === "loading") { // Temporarily commented out
  //   // Show a loader or empty state while checking auth status
  //   return <div className="h-screen flex justify-center items-center">Loading...</div>;
  // }

  // if (status === "unauthenticated") { // Temporarily commented out
  //   // If unauthenticated, the user is redirected in the useEffect
  //   return null;
  // }

  return (
    <div className="flex overflow-hidden">
      <Navbar />
      <div className="grow flex flex-col bg-[#EDEDED] dark:bg-[#212121]">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col flex-grow justify-between h-screen">
            <div className="place-content-end hidden lg:flex">
              <div id="Chat-Btn" className="px-3 py-8 mr-2 rounded-[12px]">
                <h1
                  id="h-text"
                  className="flex items-center text-base poppins font-semibold text-[#09ACBB]"
                >
                  <button
                    onClick={toggleDarkMode}
                    className="text-[#09ACBB] flex items-center pr-4 cursor-pointer transition-transform duration-300"
                  >
                    {darkMode ? (
                      <FiToggleRight className="w-10 h-10" />
                    ) : (
                      <FiToggleLeft className="w-10 h-10" />
                    )}
                  </button>
                  <span className="cursor-default">
                    Hi, {/*session?.user?.name || 'Laurent'*/} Laurent!{/* Temporarily replaced with 'Laurent' */}
                  </span>
                </h1>
              </div>
            </div>
            {/* Centered Main Chat Interface */}
            <main className="p-4 h-[43rem] overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col space-y-4 w-full max-w-[45rem]">
                  {/* Chat Messages Container */}
                  <div className="flex flex-col space-y-2">
                    {/* Bot Message */}
                    <div className="flex gap-3 items-end">
                      <div className="flex-shrink-0">
                        <Image
                          src="/logo.png"
                          height={40}
                          width={40}
                          className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                          alt="Logo"
                        />
                      </div>
                      <div className="dark:bg-[#2b2b2b] bg-[#E2E2E2] p-4 rounded-e-3xl rounded-t-3xl max-w-xs flex-grow">
                        <p className="dark:text-white text-[#000000] text-sm lg:text-base xl:text-base">
                          Hello there! 👋 I’m Adriano AI, your assistant for Adrian CIMS. How can I assist you today? Feel free to ask about your loan status, history, or any related queries.
                        </p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="bg-[#09ACBB] p-4 rounded-s-3xl rounded-t-3xl max-w-xs self-end">
                      <p className="text-white text-sm lg:text-base xl:text-base">
                        I want to know the status of my loan application.
                      </p>
                    </div>

                    {/* Bot Message */}
                    <div className="flex gap-3 items-end">
                      <div className="flex-shrink-0">
                        <Image
                          src="/logo.png"
                          height={40}
                          width={40}
                          className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
                          alt="Logo"
                        />
                      </div>
                      <div className="dark:bg-[#2b2b2b] bg-[#E2E2E2] p-4 rounded-e-3xl rounded-t-3xl max-w-xs flex-grow">
                        <p className="dark:text-white text-[#000000] text-sm lg:text-base xl:text-base">
                          Please enter your loan application ID or any additional information for us to fetch your status.
                        </p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="bg-[#09ACBB] p-4 rounded-s-3xl rounded-t-3xl max-w-xs self-end">
                      <p className="text-white text-sm lg:text-base xl:text-base">
                        My application ID is 123456789.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* Chat Interface */}
            <div className="flex justify-end">
              <div className="flex flex-col w-full px-6 bg-[#21211]">
                <div className="flex flex-grow items-center w-full dark:bg-transparent m-auto border-[1px] dark:border-[#4E4E4E] dark:bg-[#252525] bg-[#1695a3a9] rounded-full py-[6px] pl-4 pr-4 justify-between max-w-4xl mx-auto">
                  <input
                    className="w-full overflow-y-auto poppins bg-transparent outline-none border-none px-6 text-white dark:placeholder-[#828282] placeholder-[#ffffffec] resize-y"
                    type="text"
                    placeholder="Reply to Adriano..."
                  />
                </div>

                <div className="py-2 text-center md:px-10">
                  <div>
                    <span className="text-xs poppins font-normal text-gray-700 dark:text-gray-400 md:font-light ">
                      Adriano - Your Assistant for Adrian CIMS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;