import { heros } from "../data/heros"


export const getHeroByName = (name) => {
   if(!name){
      return [];
   }

   return heros.filter( heros => heros.superhero.toLowerCase().includes(name.toLowerCase()));
}
