"use client"
import IngredientsList from './IngredientsList';
import {React, useState} from 'react'

const Ingredients = () => {

  const [ingredientsList, setIngredientsList ] = useState([]);

  const addIngrediends = (formData) => {
    const newIngredient = formData.get("ingredient");
    if(newIngredient != "" && newIngredient != null && newIngredient != undefined)
    setIngredientsList(prev => [...prev, newIngredient])
  }
  return (
    <>
    <div className='bg-[#FAFAF8] sm:p-10 p-4' >
      <div className=''>
        <form action={addIngrediends} className=' flex justify-center gap-4'>
          <input className='border rounded-md w-100 p-2' type="text" 
          placeholder='eg. Chicken' name='ingredient'/>
          <button className=' bg-[#141413] text-gray-100 px-4 py-2 rounded-md' >Add Ingredients</button>
        </form>
       </div>
       <IngredientsList ingredients={ingredientsList}/>
      

    </div>
       
    </>
  )
}

export default Ingredients