import React, { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
    className='max-w-7xl mx-auto px-3 py-4'
    
    >{children}</div>
  )
}

export default Wrapper