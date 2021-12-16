import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState (props.edit ? props.edit.value : '');


    //cursor focused on thst input field
    // const inputRef = useRef(null)
   
    // useEffect(() => {
    //     inputRef.current.focus()
    // })

    const handleChange = e =>{
        setInput(e.target.value);
    };
    // to prevent refreshing
    const handleSubmit = e =>{
        e.preventDefault(); 

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className = 'todo-form' onSubmit = {handleSubmit}>
            {props.edit ? (
                <React.Fragment>
                    <input
                type = 'text'
                placeholder = 'edit todo'
                value = {input}
                name = 'text'
                className ='todo-input edit'
                onChange={handleChange}
                //curse focused on this input field
                // ref={inputRef}
                />

                {/* <input
                type = 'date'
                placeholder = 'enter date'
                // value = {date}
                name = 'date'
                className ='todo-input edit'
                // onChange={handleChange}
                //curse focused on this input field
                // ref={inputRef}
                />  
                
                <br /> */}

            <button className ='todo-button edit'>
                Edit
            </button>
                </React.Fragment>
                
            ) : 
            (<React.Fragment>
                <input
                type = 'text'
                placeholder = 'add a todo'
                value = {input}
                name = 'text'
                className ='todo-input'
                onChange={handleChange}
                //curse focused on this input field
                // ref={inputRef}
                />

                {/* <input
                type = 'date'
                placeholder = 'enter date'
                // value = {date}
                name = 'date'
                className ='todo-input edit'
                // onChange={handleChange}
                //curse focused on this input field
                // ref={inputRef}
                /> 
                <br /> */}
            <button className ='todo-button'>
                Add todo
            </button>
            </React.Fragment>
            )}
            
        </form>
    );
}

export default TodoForm;
