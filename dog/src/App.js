import React, { Component } from 'react';
import logo from './doge.png';
import './App.css';
import Dog from './Dog/Dog';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    }

    this.handleSubmitInParent = (dataFromForm) => {
      let dogs = this.state.dogs;
      dogs.push({
        id: (dogs.length + 1),
        name: dataFromForm.name,
        age: dataFromForm.age,
        breed: dataFromForm.breed
      });
      this.setState({ dogs });
    }

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
        <ChildForm updateData={this.handleSubmitInParent} />
        <br /><DogTable dogs={this.state.dogs} />

      </div>
    );
  }
}


class ChildForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      breed: ""
    }


    this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });
  
    this.handleSubmit = (e) => {
      e.preventDefault();
      this.props.updateData(this.state);
      this.setState ({
        name: "",
        age: "",
        breed: ""
      })
    }
  }

  render() {
    return (
      <form>
        <h3>Enter a Name</h3>
        <input type="text" name="name" placeholder="Name" onChange={this.handleChange("name")} /><br /><br />
        <h3>Enter an age</h3>
        <input type="text" name="age" placeholder="Age"  onChange={this.handleChange("age")}/><br /><br />
        <h3>Enter a breed</h3>
        <input type="text" name="breed" placeholder="Breed" onChange={this.handleChange("breed")}/>
        <button onClick={this.handleSubmit}>
          Create
        </button>
      </form>
    );
  }
}


//a class to render a table of d
class DogTable extends Component {
  render() {
    return (
      <table className="App-table">
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
