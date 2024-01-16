import './App.css';
import Emojis from '../src/components/Emojis';
import Card from '../src/components/Card';

function createCard(Emoji){
  return (
    <Card
      key = {Emoji.id}
      emoji = {Emoji.emoji}
      name = {Emoji.name}
      desc = {Emoji.description}
    />
  )
}

function App() {
  return (
    <div className="App">
      <h1>emojipedia</h1>
      {Emojis.map(createCard)}
      {/* <Card 
        emoji = {Emojis[0].emoji}
        name = {Emojis[0].name}
        desc = {Emojis[0].description}  
      />
      <Card 
        emoji = {Emojis[1].emoji}
        name = {Emojis[1].name}
        desc = {Emojis[1].description}  
      />
      <Card 
        emoji = {Emojis[2].emoji}
        name = {Emojis[2].name}
        desc = {Emojis[2].description}  
      /> */}
    </div>
  );
}

export default App;
