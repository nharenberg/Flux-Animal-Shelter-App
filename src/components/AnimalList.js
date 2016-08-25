import React, { Component } from 'react'
import ListItem from './ListItem'
import AnimalStore from '../stores/AnimalStore'
import AnimalActions from '../actions/AnimalActions'

export default class AnimalList extends Component {
  constructor() {
    super();

    this.state = {
      animals: AnimalStore.getAll()
    }

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllAnimals();
    AnimalStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      animals: AnimalStore.getAll()
    });
  }

  render() {
    const ListItems = this.state.animals.map(animal => {
      return (
        <ListItem key={animal._id} {...animal}/>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Animal</th>
            <th>Species</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
