import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
//import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const{ q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] =  useForm({
        searchText: q
    })

    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q] )

    const handleSearch = (e) => {
        e.preventDefault();
        //console.log( searchText );
        history.push(`?q=${ searchText }`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row" >
                <div className="col-5" >
                    <h4>Search Form</h4>        
                    <hr/>
                    <form  onSubmit={ handleSearch } >
                        <input 
                        type="text"
                        placeholder="Buscar Heroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value= { searchText }
                        onChange={ handleInputChange }
                        />

                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    > 
                    Buscar...
                        </button>    
                    </form>
                </div>
            
            <div className="col-7" >
                <h4>Resultados</h4>
                <hr/>

                {
                    //si el query es un string vacio
                    (q === '')&&
                    <div className="alert alert-info">
                        Busque un Heroe
                    </div>
                }
                {
                    //si el query es diferente a un string vacio 
                    (q !== '' && heroesFiltered.length === 0 )&&
                    <div className="alert alert-danger">
                        No se encuentra ningun Heroe con { q }
                    </div>
                }

                { heroesFiltered.map( hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                     />
                ) ) }
                </div>    

            </div>
        </div>
    )
}
