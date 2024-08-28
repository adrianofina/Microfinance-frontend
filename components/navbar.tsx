"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter(); // Initialize router

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  // Sign out function to be called when the user clicks the logout button
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login"); // Redirect to login page after signing out
  };
  return (
    <div className="hidden lg:flex xl:flex">
      {/* Header Section */}
      <div
        className={`fixed top-4 left-4 z-30 flex items-center justify-between ${
          isVisible ? "w-72" : "w-8"
        }`}
      >
        <button onClick={toggleMenu} className="flex items-center">
          <span className="bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg p-2 ">
            <svg
              width="30"
              height="30"
              viewBox="0 0 45 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.5"
                y="1.5"
                width="42"
                height="40.5938"
                rx="8.5"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="24.7029"
                y1="0.727712"
                x2="23.9998"
                y2="43.6183"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="7"
                y1="11.5"
                x2="17"
                y2="11.5"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="7"
                y1="15.5"
                x2="17"
                y2="15.5"
                stroke="white"
                strokeWidth="3"
              />
              <line
                x1="7"
                y1="20.5"
                x2="17"
                y2="20.5"
                stroke="white"
                strokeWidth="3"
              />
            </svg>
          </span>
        </button>

        <button className="py-4 flex items-center">
          <span className="bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg p-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 42 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.1537 13.0404L27.3082 5.27574M36.1537 13.0404L25.1001 22.7432C23.6435 24.0219 21.8755 25.0313 19.8456 25.3386C17.7961 25.649 15.2527 25.7522 14.0397 24.6875C12.8268 23.6228 12.9445 21.39 13.298 19.5909C13.648 17.8091 14.798 16.2572 16.2546 14.9785L27.3082 5.27574M36.1537 13.0404C36.1537 13.0404 42.7876 7.21691 38.3649 3.33456C33.9421 -0.547794 27.3082 5.27574 27.3082 5.27574M39.5935 18.5C39.5935 31.1176 35.1708 35 20.7968 35C6.42277 35 2 31.1176 2 18.5C2 5.88235 6.42277 2 20.7968 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={`flex h-screen transition-transform duration-300 bg-[#EDEDED] dark:bg-[#212121] ${
          isVisible ? "translate-x-0" : "-translate-x-full hidden"
        }`}
      >
        <div className="w-[19rem] flex flex-col dark:dark:bg-[#212121] ml-2 bg-[#09ACBB] my-4 rounded-xl justify-between">
          {/* Main Content */}
          <div className="mt-24 px-4 overflow-y-auto my-8 custom-scrollbar">
            <h1 className="text-xs font-medium dark:text-[#676767] text-[#EEEEEE] pt-6 pb-2">
              Today
            </h1>
            <div className="space-y-2">
              <div className="p-2 text-sm font-normal text-white dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg flex justify-between items-center cursor-pointer group">
                <h2 className="truncate">Loan inqueries</h2>
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
                <h2 className="truncate">Interest rates</h2>
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
                <h2 className="truncate">My loan history</h2>
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
            <div className="p-2 text-sm font-normal text-white dark:hover:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg flex justify-between items-center cursor-pointer group">
            <h2 className="truncate">Qualifications</h2>
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
                <h2 className="truncate">How to avoid penalties</h2>
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
            <br />
          
          
            <button className="text-sm text-white hover:bg-[#8ff4] rounded-lg p-2 mt-2" onClick={() => window.location.href = '/home'}>
               Home
            </button>
     
         
          </div>

          {/* Footer Section */}
          <div className="mb-4 px-4">
            <div className="flex items-center gap-2 py-2 dark:bg-[#e8e8f5] hover:bg-[#d6d6f0] rounded-lg hover:rounded-lg cursor-pointer">
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
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
