// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I am a React App</h1>
      <p>This is really working ...</p>
      <Person name="Noushi" age="30"/>
      <Person name="Mmammali" age="30">My Hobbies: Books</Person>
      <Person name="Mahda" age="8"/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now??'));
}

export default App;


// import React, { Component } from 'react';
// import './App.css';


// class App extends Component {
//   render(){
//     return(
//       <div>
//         <h1>Hi, I am a React App</h1>
//       </div>
//     )
//   }
// }

// export default App;