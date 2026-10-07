import { useState, useEffect } from 'react';
import DisneyCharacters from './components/DisneyCharacters';




export default function App(){
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response = await fetch("https://api.disneyapi.dev/character")
      const {data} = await response.json();
      setCharacters(data);
    }
  
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("This was the error: " + e));
  }, []);

  return(
    <>
    <h1>Disney Characters and their Film Origins</h1>
    <DisneyCharacters data={characters}/>
    </>
  );
}