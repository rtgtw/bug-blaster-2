import logo from './logo.svg';
import './App.css';
import './styles.css';
import './components/TicketForm.js';
import TicketForm from './components/TicketForm.js';




function App() {
  return (
    <div className="App">

      <div className='container'>
        <h1>Bug Blaster</h1>

        <TicketForm></TicketForm>




      </div>

    </div>
  );
}

export default App;
