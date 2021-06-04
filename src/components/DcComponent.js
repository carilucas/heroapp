import React from 'react'
import { HeroList } from './heros/HeroList'

export const DcComponent = () => {
   return (
      <div>
         <h1>DcComponent</h1>
         <hr/>
         <HeroList publisher='DC Comics' />
      </div>
   )
}
