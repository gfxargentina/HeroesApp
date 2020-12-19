import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ 
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,
 }) => {
    return (
        <div className="row">
        <div className="card ms-3 mb-3" style={{ maxWidth: 440 }} >
            <div className="row " > 
                <div className="col-md-4 " >
                    <img src={ `./assets/heroes/${id}.jpg` } className="card-img" alt={superhero}/>
                </div>
                <div className="col-md-8" > 
                    <div className="card-body" >
                        <h5 className="card-title" > {superhero} </h5>
                        <p className="card-text" > { alter_ego } </p>
                        {/* si el alter_ego es diferente de los characters solo quiero que ahi recien se renderize */}
                        {
                            ( alter_ego !== characters )
                            && <p className="card-text" >{ characters } </p>
                        }
                        <p className="card-text" >
                            <small className="text-muted" > { first_appearance } </small>
                        </p>
                        <Link to={ `./hero/${ id }`  }  >
                            Mas...
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}


