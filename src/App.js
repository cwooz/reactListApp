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

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons.slice()];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons(personIndex)
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState( {persons: persons} )
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
							changed={(event) => this.nameChangedHandler(event, persons.id)} />
					})}
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
