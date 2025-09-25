import React from 'react'


function IngredientsList(props) {
    const IngredientList = props.ingredientList.map((ingredient) => (
        <div className='ingredient'>
        <li key={ingredient}>{ingredient}</li>
         <button
        className="remove-button"
        onClick={() => props.removeIngredient(ingredient)}
        aria-label={`Remove ${ingredient}`}
      ><i class="fa-solid fa-x"></i></button>
        </div>
    ))

  return (
    <section>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite"> 
        {IngredientList}
    </ul>

    {props.ingredientList.length > 3 && <div className='get-ingredientlist'>
        <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <div>
            <button onClick={props.showRecipe}>Get a recipe</button>
        </div>
    </div>}
</section>
  )
}

export default IngredientsList