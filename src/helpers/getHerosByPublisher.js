import { heros } from "../data/heros";

export const getHerosByPublisher = (publisher) => {
   return heros.filter( heros => heros.publisher === publisher);
}
