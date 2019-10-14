import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";
import LocationsList from './components/LocationsList';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={props => <CharacterList {...props} />} />
      <Route path="/locations" component={LocationsList} />
    </main>
  );
}