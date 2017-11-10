import React, { Component } from 'react';
import logo from './doge.png';
import './App.css';
import Dog from './Dog/Dog';


class App extends Component {

  state = {
    dogs: [
      {
        id: 1,
        name: "Fido",
        age: 3,
        breed: "Dashund"
      },
      {
        id: 2,
        name: "Splodge",
        age: 10,
        breed: "St. Bernards"
      }
    ],
    showDogs: false
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dogs</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* this below is passing this.state.dogs as a prop called dogs to DogTable*/}
        <DogTable dogs={this.state.dogs} />

      </div>
    );
  }
}

class DogTable extends Component {


  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Breed</th>
          </tr>

          {
            /* For every dog in props.dog, make table row element, by calling dog function
              which returns table row  */
            this.props.dogs.map(function (currentDog, index) {

              return <Dog
                key={currentDog.id}
                name={currentDog.name}
                age={currentDog.age}
                breed={currentDog.breed}
              />
            }
            )
          }
        </tbody>
      </table>
    )
  }
}

export default App;
