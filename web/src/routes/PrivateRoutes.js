import React from 'react'
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import Profile from '../Components/Profile/Profile'
import ConfigPage from '../Components/ConfigPage/ConfigPage'
import ConfigInformation from '../Components/ConfigPage/Components/ConfigInformation/ConfigInformation'
import Spots from '../Components/Spots/Spots'
import NewSpot from '../Components/NewSpot/NewSpot';
import NavBar from '../Components/NavBar/NavBar'

function PrivateRoutes () {

    return (
        <>
        
        <BrowserRouter>
        <NavBar/>
            <Switch>

                <Route path="/spots" component={Spots}/>
                <Route path="/spot/new" component={NewSpot}/> 
                <Route path="/profile" component={Profile}/>
                <Route path="/config" component={ConfigPage}/> 
                <Route path="/config/information" component={ConfigInformation}/>
                
                <Redirect from="*" to="/spots" exact/>  
        
            </Switch>
        </BrowserRouter>
        </>
    )


}


export default PrivateRoutes;