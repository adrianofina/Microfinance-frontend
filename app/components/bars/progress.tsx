import React from 'react';

interface FormprogressProps {
  step: number;
}

const Formprogress: React.FC<FormprogressProps> = ({ step }) => {
  return (
    
    <div className="mb-4 flex flex-col items-start">
      <br />
      <div className="relative mb-10"> {/* Increased spacing */}
        <div
          className={`w-16 h-16 rounded-full border-4 ${
            step >= 1 ? 'border-green-200' : 'border-gray-400'
          } flex items-center justify-center ${
            step >= 3 ? 'border-green-500' : ''
          }`}
        >
          <div
            className={`bg-${
              step >= 1 ? (step >= 3 ? 'green-500' : 'green-200') : 'gray-400'
            } rounded-full h-12 w-12 absolute`}
          ></div>
        </div>
      </div>
      <div className="relative mb-10"> {/* Increased spacing */}
        <div
          className={`w-16 h-16 rounded-full border-4 ${
            step >= 2 ? 'border-green-200' : 'border-gray-400'
          } flex items-center justify-center ${
            step >= 3 ? 'border-green-500' : ''
          }`}
        >
          <div
            className={`bg-${
              step >= 2 ? (step >= 3 ? 'green-500' : 'green-200') : 'gray-400'
            } rounded-full h-12 w-12 absolute`}
          ></div>
        </div>
        {/* Vertical Dotted Line between circles */}
        <div
          className={`absolute top-1/4 transform -translate-y-1/2 w-1 h-24 bg-gray-400 rounded-full ${
            step >= 2 ? 'bg-green-200' : ''
          } ${step >= 3 ? 'bg-green-500' : ''} `}
          style={{
            left: '50%',
            marginLeft: '-0.5px',
            opacity: 0.5,
            zIndex: -1, /* Place line behind circles */
          }}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white rounded-full`}
            style={{
              opacity: 0.5,
              transform: 'translate(-50%, -50%)',
              backgroundSize: '10px 10px', /* Dot size */
              backgroundPosition: '0 0, 10px 10px', /* Dot spacing */
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      </div>
      <div className="relative">
        <div
          className={`w-16 h-16 rounded-full border-4 ${
            step >= 3 ? 'border-green-200' : 'border-gray-400'
          } flex items-center justify-center ${
            step >= 3 ? 'border-green-500' : ''
          }`}
        >
          <div
            className={`bg-${
              step >= 3 ? (step >= 3 ? 'green-500' : 'green-200') : 'gray-400'
            } rounded-full h-12 w-12 absolute`}
          ></div>
        </div>
        {/* Vertical Dotted Line between circles */}
        <div
          className={`absolute top-1/4 transform -translate-y-1/2 w-1 h-24 bg-gray-400 rounded-full ${
            step >= 3 ? 'bg-green-200' : ''
          } ${step >= 3 ? 'bg-green-500' : ''} `}
          style={{
            left: '50%',
            marginLeft: '-0.5px',
            opacity: 0.5,
            zIndex: -1, /* Place line behind circles */
          }}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white rounded-full`}
            style={{
              opacity: 0.5,
              transform: 'translate(-50%, -50%)',
              backgroundSize: '10px 10px', /* Dot size */
              backgroundPosition: '0 0, 10px 10px', /* Dot spacing */
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Formprogress;