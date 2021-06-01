import React from 'react';
import Todo from './Todo';
import TodoDisplayArea from './TodoDisplayArea';


const initialState = {
    todoList : [],
    currentTodo : {}
}

class TodosList extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }
    componentDidMount(){
       fetch('https://forested-crystalline-bonobo.glitch.me/').then((res)=> {
           return res.json()
        }).then((res1)=> {
            console.log("response here", res1);
            this.setState({
                ...this.state, todoList: res1
            })
        }).catch((e)=> {
            console.log(e);
        })
    }
    
    handleTodoClick = (e,id) => {
        this.setState({
            ...this.state, currentTodo: this.state.todoList.find(todo => todo.id === id)
        })
    }

    
    render(){
        let todoListElems =  this.state.todoList.map((item, i) => {
            return (
                <Todo data = {item} key = {'td_'+i} handleTodoClick = {this.handleTodoClick}/>
            )
        })
        return(
            <div className = 'todoContainer'>
            <div>
                {todoListElems}
            </div>
            <div>
                 <TodoDisplayArea currentTodo = {this.state.currentTodo}/>
            </div>
           
            </div>
        )
        }
}

export default TodosList;