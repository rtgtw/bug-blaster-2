import logo from './logo.svg';
import './App.css';
import './styles.css';
import './components/TicketForm.js';
import TicketForm from './components/TicketForm.js';
import { useReducer } from 'react';
import ticketReducer from './reducers/ticketReducer.js';



function App() {


  const initialState = {

    tickets: []

  };




  //kinda like useState where you pass in the initial value, but you also pass in the reducer as well which will do the logic
  //state, starts off as initialState but once dispatch is triggered, the new state is whatever you return from the reducerFunction
  //dispatch calls ticketReducer, react passes in the initialState, and your action aswell, you just have to define the action
  const [state, dispatch ] = useReducer(ticketReducer, initialState);


  return (
    <div className="App">

      <div className='container'>
        <h1>Bug Blaster</h1>

        <TicketForm dispatch={dispatch}></TicketForm>




      </div>

    </div>
  );
}

export default App;
