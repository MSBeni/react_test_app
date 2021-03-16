
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// // A Stateful Component
// const App = props => {
//   // Using useState as a react hook
//   const [personsState, setPersonState] = useState ({
//     persons: [
//       {name:"Noush Gol", age:"31"},
//       {name:"MiMI", age:"31"},
//       {name:"Faraz", age:"5"},
//     ],
//     otherState: 'some other values'
//   });

//   const switchNameHandler = () =>{
//     // console.log('Was Clicked!')
//     // Do not Do This => this.state.persons[0].name = 'Maxim'
//     setPersonState({persons: [
//       {name:"Noush Gol MiMi Chi", age:"30"},
//       {name:"MiMI", age:"31"},
//       {name:"Faraz", age:"6"}
//     ],
//     otherState: personsState.otherState
//   })
//   }
//     return(
//       <div className="App">
//         <h1>Hi I am a React App</h1>
//         <p>This is really working ...</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Books</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     )
//   }

// export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"Noush Gol", age:"31"},
      {name:"MiMI", age:"31"},
      {name:"Faraz", age:"5"},
    ],
    showPerson:false
  }

  switchNameHandler = (newName) =>{
    // console.log('Was Clicked!')
    // Do not Do This => this.state.persons[0].name = 'Maxim'
    this.setState({persons: [
      {name:newName, age:"30"},
      {name:"MiMI", age:"31"},
      {name:"Faraz", age:"6"},
    ]})
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name:"Noush Gol", age:"30"},
      {name:event.target.value, age:"31"},
      {name:"Faraz", age:"6"},
    ]})
  }

  onTogglePersons = () => {
    const codeShow = this.state.showPerson;
    this.setState({showPerson: !codeShow })
  }

  render(){
    // Defining inline style for the click -- onClick() bottum
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div> 
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Noushiiii!!!!')}
            changed={this.nameChangeHandler}>My Hobbies: Books</Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
      </div>
      )
    }

    return(
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>This is really working ...</p>
        <button 
          style={style}
          onClick={this.onTogglePersons}>Toggle Persons</button>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Farnoush... ')}>Switch Name</button>
          {persons}
      </div>
    )
  }
}

export default App;



// import logo from './logo.svg';
// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';

// function App() {
  // state = {
  //   persons: [
  //     {name:"Noush Gol", age:"31"},
  //     {name:"MiMI", age:"31"},
  //     {name:"Faraz", age:"5"},
  //   ]
  // }
//   return (
//     <div className="App">
      // <h1>Hi I am a React App</h1>
      // <p>This is really working ...</p>
      // <button>Switch Name</button>
      // <Person name="Noushi" age="30"/>
      // <Person name="Mmammali" age="30">My Hobbies: Books</Person>
      // <Person name="Mahda" age="8" />
//     </div>
//   );
//   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now??'));
// }

// export default App;

