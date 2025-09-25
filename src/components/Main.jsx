import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import {getRecipeFromMistral} from "./myai"

function Main() {
    const [ingredientList, setIngredientList] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    function removeIngredient(ingredienttoremove){
        setIngredientList((prev)=>prev.filter((ingredient)=>ingredient!=ingredienttoremove
    )

        )
    }

    function HandleEvent(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientList((prev) => [...prev, newIngredient])

    }

    async function showRecipe() {
        const recipeMarkdown= await getRecipeFromMistral(ingredientList)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={HandleEvent} className='add-ingredient'>
                <input
                    type='text'
                    placeholder='eg. tomato'
                    aria-label='Add ingredint'
                    name="ingredient"
                    required={true}
                />
                <button>Add ingredients</button>
            </form>

            {ingredientList.length ? <IngredientsList showRecipe={showRecipe} removeIngredient={removeIngredient} ingredientList={ingredientList}/> : null}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}

export default Main