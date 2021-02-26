
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name:"Noush Gol", age:"31"},
      {name:"MiMI", age:"31"},
      {name:"Faraz", age:"5"},
    ]
  }
  render(){
    return(
      <div className="App">
        <h1>Hi I am a React App</h1>
        <p>This is really working ...</p>
        <button>Switch Name</button>
        <Person name="Noushi" age="30"/>
        <Person name="Mmammali" age="30">My Hobbies: Books</Person>
        <Person name="Mahda" age="8" />
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

