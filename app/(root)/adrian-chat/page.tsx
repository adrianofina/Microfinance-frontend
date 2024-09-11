"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";
import Chat from "../../components/ui/chat";
import Header from "../../components/bars/header";
import Navbar from "../../components/bars/navbar";

const ChatBot = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

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
      localStorage.setItem("dark-mode", newMode);
      return newMode;
    });
  };
  return (
    <div className="flex overflow-hidden h-screen">
      {status === "authenticated" ? (
        <>
          <div>
            <Navbar/>
          </div>
          <div className="grow flex flex-col bg-[#EDEDED] dark:bg-[#212121]">
            <div className="flex flex-col flex-grow">
              <div className="flex flex-col flex-grow justify-between custom-scroll h-screen">
                <Header />
                <div className="place-content-end hidden lg:flex">
                  <div id="Chat-Btn" className="px-5 py-4 pb-8 mr-6 rounded-[12px]">
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
                        Hi, {session.user.name || session.user.username}
                      </span>
                    </h1>
                  </div>
                </div>
                {/* Main chats  section block */}
                <Chat />
                {/* end section block */}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ChatBot;
