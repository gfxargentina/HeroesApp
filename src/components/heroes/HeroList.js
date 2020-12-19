import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    //utilizar useMemo para optimizacion, solo si el componente usa algun parametro que cambia
    //se deberia disparar si el array publisher cambia
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

    //const heroes = getHeroesByPublisher( publisher );

    return (
        <div className="card-group" >
            
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } 
                        { ...hero }
                    />
                ) )
            }   
        </div>
    )
}
