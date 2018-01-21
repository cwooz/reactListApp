import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
	state = {
		persons: [
			{ id: 'kj23', name: 'Max', age: '28' },
			{ id: 'df87', name: 'Manu', age: '19'},
			{ id: 'd4f6', name: 'Sam', age: '27' }
		],
		otherState: 'some other value',
		showPersons: false
	}

	// switchNameHandler = (newName) => {
	// 	// console.log('was clicked');
	// 	// this.state.persons[0].name = 'Maximilian';
	// 	this.setState({
	// 		persons: [
	// 			{ name: newName, age: '28' },
	// 			{ name: 'Manu', age: '19'},
	// 			{ name: 'Sam', age: '22' }
	// 		]
	//   })
	// }

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons.slice()];
		// const persons = this.state.persons.slice();
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = this.state.persons(personIndex);

		this.setState({
			persons: [
				{ name: 'Max', age: '28' },
				{ name: event.target.value, age: '19'},
				{ name: 'Stephanie', age: '22' }
			]
	  })
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}


	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let persons = null;

		if ( this.state.showPersons ) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
					})}
					{/* <Person 
						name={this.state.persons[0].name}  
						age={this.state.persons[0].age} />
					<Person 
						name={this.state.persons[1].name} 
						age={this.state.persons[1].age}
						click={this.switchNameHandler.bind(this, 'Max!!')} 
						changed={this.nameChangedHandler} >Hobbies: Racing Cars</Person>
					<Person 
						name={this.state.persons[2].name} 
						age={this.state.persons[2].age}
						click={this.switchNameHandler.bind(this, 'Max!!!')} /> */}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>This is a React App</h1>
				<p></p>
				<button
					style={style}
					onClick={this.togglePersonsHandler}>Toggle Persons</button>
				{persons}
			</div>
		);
	}
}

export default App;
