import React, { useState, useEffect } from "react";
import uuid from 'uuid';

import CharacterCard from "./CharacterCard";

export default function SearchForm( props ) {
  const [searchTerm, setSearchTerm]       = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const characters = props.charList;

  useEffect(() => {
    const results = characters.filter( character =>
      character.name.toLowerCase().includes( searchTerm.toLowerCase() )
    );
    setSearchResults( results );
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm( event.target.value );
  };

  return (
    <section className="search-form">
     <form>
        <label>
          Search:
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            value={ searchTerm }
            onChange={ handleChange }
          />
        </label>
      </form>
      <div className="character-list">
      {searchResults.map( char => (
        <CharacterCard key={uuid.v4()} char={char} />
      ))}
      </div>
    </section>
  );
}