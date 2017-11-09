import React, { Component } from 'react';
import logo from './doge.png';
import './App.css';


class App extends Component {

  state = {
    dogs: [
      {
        id: 1,
        name: "Fido",
        age: 3,
        species: "Dashund"
      },
      {
        id: 2,
        name: "Splodge",
        age: 10,
        species: "St. Bernards"
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
        <p>
          <DogTable />
        </p>
      </div>
    );


    /*}
    deleteDogHander = (dogIndex) => {
      const dogs = [...this.state.dogs];
      dogs.splice(dogIndex,1);
      this.setState({dogs: dogs});
    }

    let dogs = null;
    if (this.state.showDogs) {
      dogs = (
        <div>{
          this
            .state
            .dogs
            .map((dog, index) => {
              return <Dog
                click={() => this.deleteDogHander(index)}
                name={dog.name}
                age={dog.age}
                key={dog.id}
                species={dog.species}
                changed={(event) => this.nameChangedHandler(event, dog.id)} />
            })}
        </div>
      );
    }
  } {*/
  }
}

class DogTable extends Component {
  render() {
    return (
      <table><tr></tr>
        </table>
    );
  }
}

export default App;
