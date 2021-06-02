import React from 'react';

class TodoDisplayArea extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            ...this.props.currentTodo,
            timeOutId: null
        }
    }

    callUpdateApi = (id, content, title) => {
        console.log("callUpdateApi callUpdateApi");
        let url = `https://forested-crystalline-bonobo.glitch.me/:${id}?date_created=${new Date()}&id=${id}&content=${content}&title=${title}`;
        fetch(url, {
            method:'PUT'
        }).then((res) => res.json()).then((res)=>console.log(res)).catch((e)=> console.log(e));
    }

    funTimeOut =  () => {
        let newTimoutId = setTimeout(this.callUpdateApi.bind(null,this.state.id, this.state.content, this.state.title),5000);
        this.setState({...this.state, timeOutId: newTimoutId});
    }

    handleUserInput = (e) => {
        console.log("inside",e.target.name );
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
        clearTimeout(this.state.timeOutId);
        this.funTimeOut();
        // temp();
    }

    render(){
        return(
            <>
                TodoDisplayArea
                <input name = 'title' onChange = {(e)=>this.handleUserInput(e)} value = {this.state.title}/> 
                <input name = 'content' onChange = {(e)=>this.handleUserInput(e)} value = {this.state.content}/>
                
            </>
        )
        }
}

export default TodoDisplayArea;