import Container from "./components/Container"
import Header from "./components/Header"
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const Api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3")
    const frase = await Api.json()
    setCharacters(frase)
    console.log(frase)
  }

   const clickeo = () => {
     reqApi();
 }


  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome clickeo={clickeo}/>
      ):(
      <CharacterContainer characters={characters} clickeo={clickeo}/>
      )}
    </Container>
  );
}


export default App;
