import React, { Component } from 'react';
import AnimalList from './AnimalList'
import NewAnimalForm from './NewAnimalForm'
import ReactBootstrap, { Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap"

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Animal Shelter</h1>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
          <NavItem eventKey="1" href="/home">New Animal Form</NavItem>
          <NavItem eventKey="2" title="Item">Adopters</NavItem>
          <NavItem eventKey="3" >Animals for Adoption</NavItem>
          <NavItem eventKey="4" >All Animals</NavItem>
        </Nav>

        <NewAnimalForm />
        <AnimalList />
      </div>
    )
  }
}
