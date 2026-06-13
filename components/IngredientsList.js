
import React, { useState } from 'react'
import Recipe from "./Recipe"
const IngredientsList = ({ingredients}) => {

    const [recipe, setRecipe] = useState();
    const [showRecipe, setShowRecipe] = useState(false);
    const getRecipe = async () => {
        const response = await fetch("api/recipe", {
            method :"POST",
            headers: {
        "Content-Type": "application/json",
      },
            body: JSON.stringify({
                ingredients
            })
        })

        const data = await response.json();
        console.log(data);
        setRecipe(data);
        setShowRecipe(true)

    }
  return (
    <>
         {ingredients.length >0 &&
         <div className=' mt-10'>
            <div className='text-3xl font-medium'>Ingredients on hand:</div>
        <ul className=' list-disc list-inside p-5'>
        {ingredients.map((item,idx) => (
          <li className='leading-10 text-xl' key={idx}>{item}</li>
        ))}

      </ul>
      </div>
        }
        {ingredients.length > 3 && 
        <div className='bg-[#F0EFEB] w-full mt-10 p-2 sm:p-8 rounded-md flex justify-between'>
           <div className='flex flex-col gap-2'>
           <div className='font-medium text-xl'>Ready for a recipe?</div>

            <div>Generate a recipe from your list of ingredients</div>
            </div>
            <div className='flex items-end'>
            <button className='bg-[#D17557] p-2 sm:px-4 sm:py-2 rounded-md text-gray-100 font-medium '
            onClick={getRecipe}>Get a recipe</button>
            </div>
        

        </div>
        }
        {showRecipe && <Recipe recipe={recipe} />}
    </>
  )
}

export default IngredientsList