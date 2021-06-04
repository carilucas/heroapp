import React from 'react'
import { HeroList } from './heros/HeroList'

export const MarvelComponent = () => {
   return (
      <div>
         <h1>MarvelComponent</h1>
         <hr/>
         <HeroList publisher='Marvel Comics' />
      </div>
   )
}
