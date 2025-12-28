import logo from './logo.svg';
import './App.css';
import './styles.css';
import './components/TicketForm.js';
import TicketForm from './components/TicketForm.js';
import { useReducer } from 'react';
import ticketReducer from './reducers/ticketReducer.js';
import TicketList from './components/TicketList.js';



function App() {


  const initialState = {

    tickets: [],
    editingTicket: null

  };




  //kinda like useState where you pass in the initial value, but you also pass in the reducer as well which will do the logic
  //state, starts off as initialState but once dispatch is triggered, the new state is whatever you return from the reducerFunction
  //dispatch calls ticketReducer, react passes in the initialState, and your action aswell, you just have to define the action
  const [state, dispatch ] = useReducer(ticketReducer, initialState);


  return (
    <div className="App">

      <div className='container'>
        <h1>Bug Blaster</h1>

        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}></TicketForm>


        {
          //Conditional renering, we only want to show the ticket list IF we have tickets
          state.tickets.length > 0 && 
          
          (<div className='results'>
          <h2>All Tickets</h2>
          <TicketList tickets={state.tickets} dispatch={dispatch}/>
          </div>)
        }

      </div>

    </div>
  );
}

export default App;
