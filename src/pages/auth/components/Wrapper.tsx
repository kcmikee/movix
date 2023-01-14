import React from 'react'

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      {children}
    </div>
  )
}

export default Wrapper
