import { heroes } from "../heroes/data/heroes.js";

export const getHerouesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    if(!validPublisher.includes(publisher)) {
        throw new Error("no es valido");
        
    }
    return heroes.filter(heroe => heroe.publisher === publisher)
}