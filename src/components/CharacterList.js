import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList( props ) {
  // TODO: Add useState to track data from useEffect
  const {charList, setCharList} = props;
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then( response => {
          console.log(response.data.results)
          setCharList(response.data.results);
        })
        .catch( error => {
          console.error( error ); 
        });
    }
    getCharacters();
  }, []);

  const listChar = charList.map((char) => {
    console.log(char)
    return (
      <div key = {char.id}>
        {char.name}
      </div>
    )
  })

  return (
    <section className="character-list">
      {listChar}
    </section>
  );
}
