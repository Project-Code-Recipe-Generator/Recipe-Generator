import React from 'react'
import {ChevronDoubleRightIcon} from '@heroicons/react/24/outline'

export const RightButton = ({start, end, setStart, setEnd, images, setImages}) => {

  const handleRightChange = () => {
    const temp_arr = images.map((data, id) => {
      if(id === start && id != images.length-2){
        data.show = false
      }else if(id === end && id != images.length){
        data.show =  true
      }
    })
    setStart(start+1)
    setEnd(end+1)
    setImages(temp_arr)
    return
  }

  return (
    <>
      <button className="rounded-full hover:bg-[#eaeaea] mr-4 mt-12 py-0.5 pl-1 pr-0.5" onClick={handleRightChange}>
          {console.log(images)}
          <ChevronDoubleRightIcon className="h-6 w-6 text-black"/>
      </button>
    </>
  )
}

