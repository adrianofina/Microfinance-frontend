"use client";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiToggleLeft, FiToggleRight } from "react-icons/fi";

const Chatheader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const router = useRouter(); // Initialize router
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Sign out function to be called when the user clicks the logout button
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login"); // Redirect to login page after signing out
  };

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
      localStorage.setItem("dark-mode", newMode.toString()); // Convert boolean to string
      return newMode;
    });
  };
  
  return (
    <div>
      {/* Header section */}
      <div className="flex justify-between pt-2 z-50 lg:hidden bg-[#09ACBB] dark:bg-[#2b2b2b]">
        <button onClick={toggleDrawer} aria-label="open menu">
          <HiOutlineMenuAlt2 className="w-11 h-11 text-gray-50 dark:text-[#09ACBB] hover:bg-[#0fb9c9] dark:hover:bg-[#303030] hover:rounded-lg p-2" />
        </button>
        <div className="flex">
          <span className="dark:hover:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg text-gray-50 dark:text-[#09ACBB] hover:rounded-lg p-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 42 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.1537 13.0404L27.3082 5.27574M36.1537 13.0404L25.1001 22.7432C23.6435 24.0219 21.8755 25.0313 19.8456 25.3386C17.7961 25.649 15.2527 25.7522 14.0397 24.6875C12.8268 23.6228 12.9445 21.39 13.298 19.5909C13.648 17.8091 14.798 16.2572 16.2546 14.9785L27.3082 5.27574M36.1537 13.0404C36.1537 13.0404 42.7876 7.21691 38.3649 3.33456C33.9421 -0.547794 27.3082 5.27574 27.3082 5.27574M39.5935 18.5C39.5935 31.1176 35.1708 35 20.7968 35C6.42277 35 2 31.1176 2 18.5C2 5.88235 6.42277 2 20.7968 2"
                style={{ stroke: "#FFF" }}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Drawer section */}
      <div
        className={`fixed top-0 left-0 w-80 dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg z-50 h-full p-2 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        {/* Top Section (Icon) */}
        <div className="flex justify-between mb-4 bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg">
          <button onClick={toggleDrawer} aria-label="close menu">
            <HiOutlineMenuAlt2 className="w-11 h-11 dark:text-[#09ACBB] dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg text-gray-50 hover:bg-[#ffffff31] hover:rounded-lg p-2" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-[#09ACBB] flex items-center pr-4 cursor-pointer transition-transform duration-300"
          >
            {darkMode ? (
              <FiToggleRight className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-10 xl:h-10 dark:text-[#09ACBB] text-gray-50" />
            ) : (
              <FiToggleLeft className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-10 xl:h-10 dark:text-[#09ACBB] text-gray-50" />
            )}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto px-4 my-2 custom-scrollbar">
        <h1 className="text-xs font-medium dark:text-[#676767] text-[#EEEEEE] pt-6 pb-2">
              Today
            </h1>
            <div className="space-y-2">
              <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
                <h2 className="truncate">About Adriano</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
                <h2 className="truncate">Loan Application</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-xs font-medium dark:text-[#676767] text-[#EEEEEE] pt-6 pb-2">
              Yesterday
            </h1>
            <div className="space-y-2">
            <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
            <h2 className="truncate">Loan Application</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
                <h2 className="truncate">Interest Rates</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-xs font-medium dark:text-[#676767] text-[#EEEEEE] pt-6 pb-2">
            Previous 7 Days
            </h1>
            <div className="space-y-2">
            <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
            <h2 className="truncate">Loan enquiries</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
                <h2 className="truncate">Loan application</h2>
                <div className="flex items-center gap-2">
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden group-hover:block">
                    <svg
                      className="hover:text-[#B8B8B8]"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.62188 3.07918C3.87597 2.571 4.39537 2.25 4.96353 2.25H13.0365C13.6046 2.25 14.124 2.571 14.3781 3.07918L15.75 5.82295V13.5C15.75 14.7426 14.7426 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7426 2.25 13.5V5.82295L3.62188 3.07918ZM13.0365 3.75H4.96353L4.21353 5.25H13.7865L13.0365 3.75ZM14.25 6.75H3.75V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6.75ZM6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H10.5C10.9142 8.25 11.25 8.58579 11.25 9C11.25 9.41421 10.9142 9.75 10.5 9.75H7.5C7.08579 9.75 6.75 9.41421 6.75 9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>

        {/* Footer Section */}
        <div className="px-4 py-4 mt-auto">
          <div className="flex items-center gap-2 dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg p-2 cursor-pointer">
            <div className="flex items-center justify-center w-8 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <button className="text-sm text-white" onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatheader;
