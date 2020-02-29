import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomPage from './components/WelcomePage';
import SearchForm from "./components/SearchForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




export default function App() {
  const [charList, setCharList] = useState([]);

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomPage} />
      <Route exact path='/characters' render={ ( props ) =>
        <CharacterList { ...props } setCharList={setCharList} charList={charList} /> } />
      <Route exact path='/search' render={ ( props ) =>
        <SearchForm { ...props } charList={charList} /> } />
    </main>
  );
}
