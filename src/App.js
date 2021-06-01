import React from 'react';
import TodosList from './components/TodosList'
import "./App.css";

class App extends React.Component {
	
	render(){
		return (
			<>
				<h1>ForethoughtNote</h1>
				<TodosList/>
			</>
		);
	}
}

export default App;


/*

		app         
		- header
		- TodosList  > {todosList : [], curreentTodo : {} }
			- Todo 
		- TodoDisplayArea

*/