import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: '28' },
			{ name: 'Manu', age: '19'},
			{ name: 'Sam', age: '27' }
		],
		otherState: 'some other value'
	}

	switchNameHandler = () => {
		// console.log('was clicked');
		// this.state.persons[0].name = 'Maximilian';
		this.setState({
			persons: [
				{ name: 'Maximilian', age: '28' },
				{ name: 'Manu', age: '19'},
				{ name: 'Sam', age: '22' }
			]
	  })
	}

	render() {
		return (
			<div className="App">
				<h1 className="App-title">This is a React App</h1>
				<p className="App-intro"></p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person name={this.state.persons[0].name}  age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing Cars</Person>
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
			</div>
		);
	}
}

export default App;
