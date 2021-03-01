
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [personsState, setPersonState] = useState ({
    persons: [
      {name:"Noush Gol", age:"31"},
      {name:"MiMI", age:"31"},
      {name:"Faraz", age:"5"},
    ],
    otherState: 'some other values'
  });

  const switchNameHandler = () =>{
    // console.log('Was Clicked!')
    // Do not Do This => this.state.persons[0].name = 'Maxim'
    setPersonState({persons: [
      {name:"Noush Gol MiMi Chi", age:"30"},
      {name:"MiMI", age:"31"},
      {name:"Faraz", age:"6"}
    ]})
  }
    return(
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>This is really working ...</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Books</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    )
  }

export default App;


// class App extends Component {
//   state = {
//     persons: [
//       {name:"Noush Gol", age:"31"},
//       {name:"MiMI", age:"31"},
//       {name:"Faraz", age:"5"},
//     ]
//   }

//   switchNameHandler = () =>{
//     // console.log('Was Clicked!')
//     // Do not Do This => this.state.persons[0].name = 'Maxim'
//     this.setState({persons: [
//       {name:"Noush Gol MiMi Chi", age:"30"},
//       {name:"MiMI", age:"31"},
//       {name:"Faraz", age:"6"},
//     ]})
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1>Hi I am a React App</h1>
//         <p>This is really working ...</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Books</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     )
//   }
// }





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

