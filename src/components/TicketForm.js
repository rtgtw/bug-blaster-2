import React, {useState}from 'react';

export default function TicketForm({dispatch}) {

//useState function returns an array with two values, value,CallbackFunction, so we destructure it with const [value1, callbackFN] = useState();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('1');




    const priorityLabels = {
        1: "Low",
        2: "Medium",
        3: "High"
    };


    const clearForm = () => {

        //change the state of the 3 properties back to default
        setTitle('');
        setDescription('');
        setPriority('1');
    }



    //create a function that will process the form when someone hits submit 
    //Important** when onSubmit is triggered, the browser calls on this callback function but it also
    //passes in the event of the submitted form to use as well so we need to create a parameter e to extract that info
    const handleSubmit = (e) => {

        console.log("Entered, Form Submitted");

        //These are coming from the states
        const ticketData = {
            id: new Date().toISOString(),
            "title": title,
            description,
            priority
        };

        dispatch({
            type:"ADD_TICKET",
            payload:ticketData
        });

        // console.log(ticketData);

        
        //This stops the page from refreshing
        e.preventDefault();

        // //Immediately clear the form when they hit submit
        clearForm();


         
       

    }

    //When a user Enters key strokes on the title input, update the title state
    //remember onChange is an event handler, so this passes the event to use, pass e into the parameter
    //e.target.value represents the key that the user entered, so we want to update our title state to reflect that
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
      const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleLabel = (e) => {
        console.log(e.target.value);
        setPriority(e.target.value);
    }






    return(<>
        <form onSubmit={handleSubmit} className='ticket-form'>

            <div>
                <label>Title</label>
                <input type='text' value={title} className='form-input' onChange={handleTitle}></input> 
            </div>

             <div>
                <label>Description</label> 
                <textarea type='text' value={description} className='form-input' onChange={handleDescription}></textarea> 
            </div>

            <fieldset className='priority-fieldset'>
                <legend>Priority</legend>


                {/* Detailed explination on the bottom */}
                {
                    Object.entries(priorityLabels).map(([value, label]) => {
                        return (<label key={value} className='priority-label'>
                            <input type='radio' value={value} checked={priority === value } onChange={handleLabel}></input>
                            {label}
                        </label>)
                    })
                }
            </fieldset>

        <button type='submit' className='button'>Submit </button>
        </form>
    </>)

}




/*
Ticket Form should have a title, a description and priority value.. low, medium and high

for all three we should have UI elements, and all of these values are stored inside of a state


1. Create a function that clears the state of the ticket after submitting
2. Build form UI
    We use the FORM tag which will create a form for us 
    By default form submission reloads the page, and sends data via http, use event.preventDefault(); to stop that

--We use <input> when its just one sentence
--We use <textarea></textarea> when we are trying to write something with multiple paragraphs

--<fieldset></fieldset> -- groups related form controls together and optionally gives them <legend>


  {
                    Object.entries(priorityLabels).map(([value, label]) => {
                        return (<label key={value} className='priority-label'>
                            {label}
                        </label>)
                    })
                }


- for starters we have to { } to break into JS because right now its JSX
-Object.entries -- converts an object into an iterable array, that way we can use .map() and other array methods on an object, it returns the key value pairs
-destructure the key:value in the parameters, you dont have to but its cleaner
-remember in .map() we pass in an anonymous function, in this case its an arroy function, if we include { } then we have to include a return value
- we use ( ) because we are jumping into JSX, so we can use <label>, the key is just the value(id we gave it, 1,2,3...)
-then while inside of the JSX we then again have to { } to break into javascript AGAIN, in order to pass in the parameter value label that we destructuredd
-Object.entries returns an Array which JSX can go through and display the HTML,

--For <input type='radio'> theres also a checked attribute as well to show if its checked or not


--Create a button element with type submit, that will handle the submit of the form






*/