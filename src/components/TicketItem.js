import React, {useState} from 'react';

export default function TicketItem({ticket, dispatch}){


    //Destructoring the ticket, the ticket is an object that holds id,title,description,priority
    const {id, title, description, priority} = ticket;

    //create an object that will hold the priority classes 
    const priorityClass = {
        1:"priority-low",
        2:"priority-medium",
        3:"priority-high"
    }

    const handleDelete = () => {
        console.log(`Deleted `, ticket)
        dispatch({type:"DELETE_TICKET", payload: {id}});
    }

    const handleEditing = () => {

        dispatch({
            type:"SET_EDITING_TICKET",
            payload: ticket
        });
    }


  
return (<>

        <div className='ticket-item'> 
            <div className={`priority-dot ${priorityClass[priority]}`}></div>

            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={handleDelete} className='button'> Delete</button>
            <button onClick={handleEditing} className='button'> Edit </button>



        </div>

    </>)

};


//This is a UI component that will show each individual ticket 
/**
 * 
 There will be two buttons, a delete button and an edit button, we will use the dispatch function in order to carry both of these out
 */