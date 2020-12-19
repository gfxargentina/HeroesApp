import { heroes } from "../data/heroes"



export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    //barre el array validPublishers y si no encuentra el argumento mandado tira un error
    if( !validPublishers.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher } " no es correcto `);
    }
    return heroes.filter( hero => hero.publisher === publisher );
}
