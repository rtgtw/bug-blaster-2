import React from 'react';
import TicketItem from './TicketItem';




export default function TicketList({tickets, dispatch}){




    return(<>

    <div className='ticket-list'>

        {
            //For every single Ticket inside of this tickets array we want to create a TicketItem component
            //We are drilling down to this TicketItem by passing in props which are already destructored in TicketItem
            tickets.map( ticket => <TicketItem key={ticket.id} dispatch={dispatch} ticket={ticket}></TicketItem>)

        }

    </div>
    
    </>)
}




/*

we also need to pass tickets and dispatch in the ticket list, this is like the container for the ticket items

this is because we have to drill it down to the ticket items since this will be the container Component

map function with the TicketItem component which will display each ticket

*/