import React from 'react';

class TodoDisplayArea extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title:this.props.currentTodo.title,
            content: this.props.currentTodo.content
        }
    }

   static getDerivedStateFromProps(props, prevState){
       return {...props} 
    }

    handleUserInput = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        // setTimeout(callUpdateApi(content, id),10000,())
    }

    callUpdateApi = () => {
        
    }

    render(){
        return(
            <>
                TodoDisplayArea
                <input name = 'title' onChange = {this.handleUserInput} value = {this.state.currentTodo.title}/> 
                <input name = 'content' onChange = {this.handleUserInput} value = {this.state.currentTodo.content}/>
                
            </>
        )
        }
}

export default TodoDisplayArea;