import React from 'react'
import {ChevronDoubleLeftIcon} from '@heroicons/react/24/outline'

export const LeftButton = () => {
  return (
    <>
      <button className="rounded-full hover:bg-[#eaeaea] ml-4 mt-12 py-0.5 pl-0.5 pr-1">
          <ChevronDoubleLeftIcon className="h-6 w-6 text-black"/>
      </button>
    </>
  )
}

