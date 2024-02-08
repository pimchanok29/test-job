import React from "react";
const index = () => {
  
  return (
    <div className="w-full h-full">
      <div className="md:flex hidden">
        <img src="/images/img1.png" />
      </div>
      <div className="flex md:hidden w-full">
        <img src="/images/img1-mobile.png" className="w-full" />
      </div>
    
      <div className="md:flex hidden">
        <img src="/images/img2.png" />
      </div>
      <div className="flex md:hidden w-full">
        <img src="/images/img2-mobile.png" className="w-full" />
      </div>
    </div>
  );
};

export default index;
