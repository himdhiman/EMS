import React from 'react'

import LeftPanel from '@/components/HomePage/LeftPanel'
import RightPanel from '@/components/HomePage/RightPanel'

const page = () => {
  return (
    <div className="w-screen h-screen bg-whitesmoke">
      <div className="!m-[0] h-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] flex flex-row items-start justify-start py-[1.25rem] px-[1.5rem] box-border gap-[0rem_0.25rem] max-w-full text-left text-[1rem] text-gray font-inter">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default page