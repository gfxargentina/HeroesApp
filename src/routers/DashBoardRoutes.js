import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardRoutes = () => {
    return (
        <>
          <Navbar />

          <Switch>
            <Route exact path="/marvel" component={ MarvelScreen } />
            <Route exact path="/heroes/:heroeId" component={ HeroScreen } />     
            <Route exact path="/dc" component={ DcScreen } />     
            {/* si no encuentra ninguna de las rutas anteriores redirige a marvel */}
            <Redirect to="/marvel" />


          </Switch>  
        </>
    )
}
