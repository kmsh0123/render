import React from 'react'

const Card = ({pd}) => {
  return (
    <div className="block gap-2 mt-5 space-y-5 w-96 mx-auto border-4 p-5">
    <h1 className='border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 p-2 px-4 flex items-center justify-center w-full rounded-xl'>{pd?.email}</h1>
     <h1 className='border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 p-2 px-4 flex items-center justify-center w-full rounded-xl'>{pd?.password}</h1>
    </div>

  )
}

export default Card