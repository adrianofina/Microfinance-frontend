import React from 'react';

const TodayDate = () => {
      
  const currentDate = getCurrentDate();

  return (
    <div>
      <h1 className="text-xs font-medium dark:text-[#676767] text-[#EEEEEE] pt-6 pb-2">
        Today: {currentDate}
      </h1>
    </div>
  );
};

const getCurrentDate = () => {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(undefined, options);
};

export default TodayDate;
