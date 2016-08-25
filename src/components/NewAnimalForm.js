import React, { Component } from 'react'
import AnimalActions from '../actions/AnimalActions'

export default class NewAnimalForm extends Component {
  constructor() {
    super();

    this.state = {
      task: ''
    }
    this.changeTaskInput = this.changeTaskInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeTaskInput(e) {
    let task = e.target.value;
    this.setState({ task })
  }

  submit(e) {
    e.preventDefault();
    let { task } = this.state;

    //TodoActions.createTodo({ task });
    this.setState({task: ''});
  }

  render() {
    let { task } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter New Animal:</label>
            <input type="text"
                   className="form-control"
                   placeholder="Animal Name:"
                   onChange={e => this.setState({name: e.target.value})}
                   value={this.state.name}/>
            <input type="text"
                   className="form-control"
                   placeholder="Animal Species:"
                   onChange={e => this.setState({name: e.target.species})}
                   value={this.state.species}/>
            <input type="number"
                   className="form-control"
                   placeholder="Animal Age:"
                   onChange={e => this.setState({name: e.target.age})}
                   value={this.state.age}/>
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
