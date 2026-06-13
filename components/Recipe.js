import React from 'react'

const Recipe = ({recipe}) => {
  return (
    <div className='mt-5'>
          <h3 className='text-center text-2xl font-bold text-gray-700'>{recipe?.title}</h3>
        <p className='mt-3 font-medium text-gray-500 '>{recipe?.description}</p>
        <div className='font-bold text-2xl mt-5 text-gray-700'>Ingredients:</div>
        <ol className='list-disc list-inside mt-2'>
            {recipe?.ingredients?.map((item,idx)  => (
              <li className='leading-10  text-md font-medium text-gray-500' key={idx}>{item}</li>
        ))}
        </ol>
        <div className="font-bold text-2xl mt-5 text-gray-700">Instruction:</div>
        <ol className='list-decimal list-inside mt-3'>
          {recipe?.instructions.map((item, idx) => (
            <li className ="leading-10  text-md font-medium text-gray-500" key={idx}>{item}</li>
          )
          )}
        </ol>
        </div>
  )
}

export default Recipe