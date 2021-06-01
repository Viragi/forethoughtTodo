import React from 'react';

class TodoDisplayArea extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            title:this.props.currentTodo.title,
            content: this.props.currentTodo.content
        }
    }
//    static getDerivedStateFromProps(props, prevState){
//        console.log("here", props);
      
//        if (props.title != prevState.title) {
//         console.log("inside", props);
//         return {...props} 
//        }
           
       
//     }

    handleUserInput = (e)=>{
        let timoutId;
        console.log(e.target.name, "name");
        this.setState({
            [e.target.name] : e.target.value
        })

        // setTimeout(callUpdateApi(content, id),10000,())
    }

    callUpdateApi = () => {
        
    }

    render(){
        console.log(this.state, "from TodoDisplayArea");
        let title = this.props.currentTodo && this.props.currentTodo.title;
        let content = this.props.currentTodo  && this.props.currentTodo.content;
        return(
            <>
                TodoDisplayArea
                <input name = 'title' onChange = {this.handleUserInput} value = {title}/> 
                <input name = 'content' onChange = {this.handleUserInput} value = {content}/>
                
            </>
        )
        }
}

export default TodoDisplayArea;