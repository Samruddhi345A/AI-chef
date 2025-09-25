import React from 'react'
import Markdown from 'react-markdown'
function ClaudeRecipe(props) {
  return (
  <section className='recipe-container'>
    <h2>Suggested Recipe</h2>
    <Markdown>{props.recipe}</Markdown>
    </section>
  )
}

export default ClaudeRecipe