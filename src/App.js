import logo from './logo.svg';
import './App.css';
import './style.css'
import quotes from'./quotes.json'
import Sentences from './components/Sentences';
import Icon from './components/Icon';



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
