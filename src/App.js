import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import Home from './Pages/Home.jsx'
import JapaneseCuisine from './Pages/JapaneseCuisine'
import ChineseCuisine from './Pages/ChineseCuisine'
import IndianCuisine from './Pages/IndianCuisine'
import Vegetarian from "./Pages/Vegetarian";
import FastFood from './Pages/FastFood'
import ItalianCuisine from './Pages/ItalianCuisine'
import MediterranianCuisine from './Pages/MediterranianCuisine'
import FrenchCuisine from "./Pages/FrenchCuisine";
import Form from './Pages/Form'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

return (
  <div className="App">
  {
    loading ?
    <div className="loader">
    <CircleLoader 
 color={"#c29e51"} loading={loading} size={150} />
    </div>


    :
  
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/japanese cuisine">
          <JapaneseCuisine />
        </Route>
        <Route exact path="/chinese cuisine">
          <ChineseCuisine />
        </Route>
        <Route exact path="/indian cuisine">
          <IndianCuisine />
        </Route>
        <Route exact path="/vegetarian">
          <Vegetarian />
        </Route>
        <Route exact path="/fast food">
          <FastFood />
        </Route>
        <Route exact path="/italian cuisine">
          <ItalianCuisine />
        </Route>
        <Route exact path="/mediterranian cuisine">
          <MediterranianCuisine />
        </Route>
        <Route exact path="/french cuisine">
          <FrenchCuisine />
        </Route>
        <Route exact path="/registration">
          <Form />
        </Route>
      </Switch>
    </Router>
  }
  </div>
);
}
export default App;
