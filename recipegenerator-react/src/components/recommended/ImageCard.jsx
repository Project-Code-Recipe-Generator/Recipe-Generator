import React from 'react'

export const ImageBox = ({src, name}) => {

  return (
    <div className="flex flex-col items-center">
      <button className="overflow-hidden rounded-md">
        <img 
          src={src} 
          alt="food"
          className="hover:scale-110 transition-all duration-250 cursor-pointer xl:w-72 xl:h-96 lg:w-64 lg:h-80 w-56 h-72 object-cover"
        /> 
      </button>
      <button className="flex justify-center items-center relative -mt-4 w-1/3 max-w-1/3">
        <h2 className="rounded-full text-center w-fit bg-[#ff8f8f] hover:bg-[#ff9e9e] font-semibold px-8 py-1">{name}</h2>
      </button>
    </div>
  )
}

