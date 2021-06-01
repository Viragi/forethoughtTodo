import React, {useState, useEffect} from 'react';

function Todo(props){
    let id = props.data.id;
    let title = props.data.title;
    let date_created = props.data.date_created;
    return(
        <div onClick = {(e)=>props.handleTodoClick(e,id)}>
           <div> {title}</div>
           <div>{date_created}</div>
            
        </div>
        

    )

}

export default Todo;