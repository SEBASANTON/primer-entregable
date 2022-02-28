import './App.css';
import './style.css'
import quotes from'./quotes.json'
import Sentences from './components/Sentences';



function App() {

  console.log(quotes)
  
  return (
    <div className="App" >
        <div>
          <Sentences/>
        </div>
    </div>
  );
}

export default App;
