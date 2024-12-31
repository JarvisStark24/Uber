/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  // sample array of locations
  const locations = [
    "Sricolony, Kaliyaganj, Uttar Dinajpur, West Bengal",
    "Seth Colony, Kaliyaganj, Uttar Dinajpur, West Bengal",
    "Santi Colony, Kaliyaganj, Uttar Dinajpur, West Bengal",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 active:border-2 border-gray-50
             active:border-black p-3 rounded-xl items-center my-4 justify-start"
          >
            <h2 className="bg-[#eee] h-8  flex items-center 
            justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}

      {/* Sample Data */}
      {/* <div className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-4 justify-start'>
        <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>Baroduari, Raiganj, Uttar Dinajpur, West Bengal</h4>
      </div>
      <div className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>Sricolony, Kaliyaganj, Uttar Dinajpur, West Bengal</h4>
      </div>
      <div className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>Debinagar, Raiganj, Uttar Dinajpur, West Bengal</h4>
      </div>
      <div className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>Rathbari, Malda, West Bengal</h4>
      </div>
      <div className='flex gap-4 active:border-2 border-gray-50 active:border-black p-3 rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8  flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>Matigara, Siliguri, Darjeeling, West Bengal</h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
