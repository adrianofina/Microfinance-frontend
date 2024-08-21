import { MdOutlineNotificationsActive } from "react-icons/md";
import Image from "next/image";
import { BsInfoLg } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";


const Notify = () => {


  
  return (
    <>
      {/* Background gradient for the entire page */}
      <div className="bg-gradient-to-r from-[#2FA0AB] via-[#6DD2DB] to-[#B2DCE2] relative min-h-screen flex flex-col items-center justify-center">
        {/* Card container */}

        <div className="absolute flex min-h-full flex-col justify-center items-center z-10">
          <div className="sm:mx-auto sm:w-full max-w-md py-12 px-2 backdrop-blur-sm bg-gradient-to-t from-[#bbf3f8e5] to-[#ffffffc7] ">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center space-y-8 ">
                <MdOutlineNotificationsActive className="h-14 w-14 text-blue-500" />
                <div className="flex gap-3 justify-center items-center px-4">
                    <span>
                <BsInfoLg className="h-8 w-8 bg-blue-500 rounded-full text-white" />
                        </span> 
                <p className="poppins font-normal text-lg"> Password reset email sent. Check your inbox to complete the reset. The token expires in 1 hour.</p>


                </div>

              <Link href="/login" className="flex justify-center items-center gap-1 poppins text-gray-500 underline font-medium text-sm hover:text-base hover:text-gray-400 ">
              <IoIosArrowRoundBack className="w-6 h-6 hover:w-7 hover:h-7"/>
              Go back
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full hidden md:block mt-20">
          <div>
            {/* Main container for the content, centered and padded */}
            <div className="max-w-3xl mx-auto px-6">
              <div className="flex items-center justify-center ">
                {/* Outer circle with inner blurred circle */}
                <div className="bg-[#BEFAFF] w-24 h-24   rounded-full rotate-6 flex justify-center items-center ">
                  <span className="absolute z-10 flex justify-center items-center text-center">
                    <svg
                      width="65"
                      height="65"
                      viewBox="0 0 65 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.0655 36.7349C28.7725 36.629 28.5191 36.4359 28.3393 36.1815C28.1596 35.927 28.0622 35.6236 28.0603 35.3121L27.9809 19.1525L21.7814 23.9834C21.5846 24.139 21.3525 24.2436 21.1057 24.2879C20.8588 24.3322 20.6048 24.3148 20.3663 24.2374L1.5709 18.0252C1.18745 17.8984 0.87005 17.6246 0.688528 17.2638C0.507007 16.9031 0.476231 16.485 0.602971 16.1015C0.72971 15.7181 1.00358 15.4007 1.36434 15.2192C1.7251 15.0377 2.14319 15.0069 2.52664 15.1336L20.5413 21.0878L28.5574 14.8366C28.7884 14.6525 29.0679 14.5395 29.3619 14.5114C29.656 14.4833 29.9518 14.5413 30.2135 14.6784C30.4706 14.8014 30.688 14.9942 30.841 15.2347C30.994 15.4752 31.0764 15.7538 31.0789 16.0389L31.1219 31.1441L39.0242 21.7922C39.21 21.5699 39.4554 21.4053 39.7316 21.3176C40.0077 21.2299 40.3031 21.2228 40.5831 21.2971C40.8754 21.3959 41.1308 21.5812 41.3154 21.8283C41.5001 22.0755 41.6053 22.373 41.6171 22.6813L41.9314 30.8037L42.67 29.6366C42.8506 29.3429 43.1254 29.1192 43.4496 29.002C43.7739 28.8849 44.1283 28.8812 44.4548 28.9916L63.2502 35.2038C63.6337 35.3306 63.9511 35.6044 64.1326 35.9652C64.3141 36.3259 64.3449 36.744 64.2182 37.1275C64.0914 37.5109 63.8175 37.8283 63.4568 38.0098C63.096 38.1913 62.6779 38.2221 62.2945 38.0954L44.6268 32.2559L41.9508 36.5675C41.7781 36.8444 41.5211 37.0586 41.2175 37.1783C40.9139 37.2981 40.5799 37.3172 40.2646 37.2328C39.9494 37.1483 39.6696 36.9649 39.4665 36.7094C39.2635 36.4539 39.1479 36.1399 39.1367 35.8138L38.7815 26.7477L30.8123 36.3019C30.6049 36.5503 30.3238 36.7262 30.0097 36.8041C29.6956 36.8819 29.3649 36.8577 29.0655 36.7349Z"
                        fill="white"
                      />
                      <path
                        d="M6.22979 13.1499C6.56118 13.2357 6.91182 13.2073 7.22512 13.0694C7.53841 12.9314 7.79609 12.6919 7.95654 12.3895C9.45297 9.35952 11.8986 6.90153 14.921 5.38982C18.1065 3.82165 21.7205 3.34864 25.2022 4.04421C28.684 4.73977 31.8388 6.56501 34.1773 9.23672C34.9283 10.1732 35.5348 11.217 35.9764 12.3332C36.065 12.5177 36.1899 12.6824 36.3437 12.8176C36.4974 12.9527 36.6768 13.0555 36.8711 13.1197C37.0655 13.1839 37.2708 13.2083 37.4747 13.1914C37.6787 13.1745 37.8772 13.1167 38.0583 13.0213C39.0782 12.3882 40.1872 11.9114 41.3484 11.607C44.8184 10.8551 48.4396 11.2696 51.6501 12.786C54.8605 14.3024 57.4807 16.836 59.1042 19.9936C60.6303 23.0088 61.1294 26.44 60.5253 29.765C60.4739 30.1034 60.5381 30.4493 60.7075 30.7468C60.8769 31.0443 61.1415 31.276 61.4588 31.4046L61.6757 31.4763C61.8694 31.5405 62.0747 31.562 62.2775 31.5395C62.4803 31.5169 62.6758 31.4508 62.8507 31.3456C63.0256 31.2405 63.1757 31.0987 63.2907 30.9302C63.4057 30.7616 63.483 30.5702 63.5171 30.369C64.1143 27.0662 63.8129 23.6637 62.6447 20.5173C61.4764 17.3708 59.4841 14.5962 56.8761 12.4835C54.2682 10.3708 51.1405 8.99768 47.8201 8.50783C44.4997 8.01798 41.1087 8.42936 38.0018 9.69895C36.2635 6.82788 33.7856 4.47666 30.8273 2.89124C27.8691 1.30583 24.5391 0.544473 21.1858 0.686814C17.8326 0.829155 14.5791 1.86996 11.7659 3.70037C8.95259 5.53077 6.68287 8.08352 5.19412 11.0916C5.10164 11.2735 5.04957 11.4732 5.04147 11.6771C5.03337 11.881 5.06943 12.0843 5.1472 12.273C5.22496 12.4616 5.34258 12.6313 5.492 12.7703C5.64142 12.9092 5.81912 13.0143 6.01292 13.0782L6.22979 13.1499ZM56.047 39.2383C55.8084 39.1608 55.5544 39.1434 55.3076 39.1877C55.0607 39.2321 54.8286 39.3366 54.6319 39.4922C55.3403 39.7264 23.4548 55.4084 22.7433 55.8628C22.404 54.9969 6.16453 23.5366 6.89208 23.7129C6.82685 23.4707 6.70281 23.2484 6.53098 23.0657C6.35915 22.883 6.14485 22.7456 5.90712 22.6656C5.64115 22.5731 5.35473 22.5562 5.07971 22.6167C4.80469 22.6772 4.55183 22.8128 4.34925 23.0084C4.14667 23.204 4.0023 23.452 3.93218 23.7247C3.86207 23.9975 3.86896 24.2843 3.95208 24.5533C3.05533 24.1126 20.2728 57.6603 20.7037 58.5886C20.7933 58.7685 20.9176 58.9289 21.0696 59.0605C21.2215 59.1922 21.398 59.2924 21.5888 59.3555C21.7797 59.4186 21.9812 59.4433 22.1816 59.4281C22.382 59.4129 22.5775 59.3582 22.7567 59.2671C23.6798 58.7062 57.287 42.1339 56.4919 41.9192C56.719 41.7527 56.8955 41.5265 57.0017 41.2657C57.1079 41.0049 57.1398 40.7198 57.0937 40.442C57.0476 40.1642 56.9253 39.9046 56.7405 39.6921C56.5558 39.4796 56.3157 39.3225 56.047 39.2383Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div className="bg-[#81D5DD] w-24 h-24 rounded-full flex justify-center items-center filter blur-2xl">
                    {/* Optional content could be added here */}
                  </div>
                </div>
              </div>
              <div>
                {/* Another set of nested circles with blur effects */}
                <div className="bg-[#BEFAFF] w-28 h-28 rounded-full flex justify-center items-center">
                  <span className="absolute z-10 flex justify-center items-center text-center">
                    <Image alt="dna icon" width={60} height={60} src="/icons/DNA.png" />
                  </span>
                  <div className="bg-[#81D5DD] w-24 h-24 rounded-full flex justify-center items-center filter blur-lg">
                    <div className="bg-[#69CFD8] w-23 h-23 rounded-full blur"></div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-end mb-96">
                {/* Another circular pattern with different dimensions */}
                <div className="bg-[#BEFAFF] w-38 h-38 rounded-full flex justify-center items-center">
                  <span className="absolute z-10 flex justify-center items-center text-center">
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 90 112"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6845 55.8985L12.071 78.4817C8.61652 92.3792 18.0832 106.738 33.1732 110.489C48.2631 114.24 63.3509 105.984 66.8054 92.087L71.3966 73.6163C79.4975 74.2265 86.9692 69.4185 88.8424 61.8824C90.9534 53.3899 85.1679 44.6146 75.9466 42.3225C66.7254 40.0304 57.5046 45.0756 55.3936 53.5681C53.5204 61.1042 57.8713 68.8509 65.315 72.1046L60.7238 90.5753C58.0368 101.385 46.3029 107.805 34.5654 104.888C22.8279 101.97 15.4656 90.8033 18.1526 79.9934L23.7661 57.4102C36.9339 59.204 49.4178 51.6307 52.4445 39.4541L59.0576 12.8494L40.8128 8.31434L39.4206 13.9153L51.5838 16.9387L46.3629 37.9424C43.868 47.9794 32.9712 53.9416 22.073 51.2326C11.1747 48.5237 4.33763 38.1534 6.83251 28.1164L12.0534 7.11269L24.2166 10.1361L25.6088 4.5351L7.36401 0L0.750909 26.6047C-2.27581 38.7812 5.20926 51.3182 17.6845 55.8985ZM61.4752 55.0797C62.8187 49.6748 68.6857 46.4647 74.5544 47.9235C80.4232 49.3823 84.1043 54.9657 82.7608 60.3707C81.4173 65.7756 75.5503 68.9857 69.6816 67.5269C63.8129 66.0682 60.1317 60.4847 61.4752 55.0797Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div className="bg-[#81D5DD] w-32 h-32 rounded-full flex justify-center items-center filter blur-xl">
                    <div className="bg-[#69CFD8] w-20 h-20 rounded-full blur"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with a half-circle shape */}
        <div className="w-full absolute bottom-0 flex justify-center overflow-hidden">
          <div className="bg-[#BEFAFF] w-[40rem] h-[20rem] rounded-t-full flex justify-center items-center">
            <div className="bg-[#81D5DD] w-[37rem] h-[18.5rem] rounded-t-full flex justify-center items-center filter blur-lg">
              <div className="bg-[#69CFD8] w-[32rem] h-[16rem] rounded-t-full blur"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notify;
