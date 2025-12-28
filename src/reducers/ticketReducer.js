

export default function ticketReducer(state, action){




    // console.log({...state, tickets: [...state.tickets, action.payload] });

    switch(action.type){

        case "ADD_TICKET":
            return {...state, tickets: [...state.tickets, action.payload] };

        case "UPDATE_TICKET":
            console.log("Entered upate ticket");
            return {...state, tickets: state.tickets.map( ticket => ticket.id === action.payload.id ? action.payload : ticket )};

        case "DELETE_TICKET":


            if(state.editingTicket && state.editingTicket.id === action.payload.id){
                 return {...state, tickets: state.tickets.filter(ticket => ticket.id != action.payload.id ), editingTicket:null};
            }else{
                 return {...state, tickets: state.tickets.filter(ticket => ticket.id != action.payload.id )};
            }


           



        case "SET_EDITING_TICKET":        
        console.log("Entered set editing ticket");
            return{
                ...state, editingTicket:action.payload
            }
            
        
        case "CLEAR_EDITING_TICKET":
            return{
                ...state, editingTicket:null
            }


        default:
            return state;
    }

}


/**
 * 
 * const newState = ticketReducer(
  state,      // current state (React provides this)
  action      // the object you passed to dispatch
);


...state,
tickets: NEW_TICKETS


since ...state has tickets in it, the second one wins, it just gets 


Whatever your reducer function returns becomes the new state.


 return {...state, tickets: [...state.tickets, action.payload] };
 --- you have to do ...state, because you want to capture all properties
 --- since we are changing tickets you want to include the tickets are are inside of the prev state + any changes that you want to include

 * 
 */