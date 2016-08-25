import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    let { _id, task, species, age } = this.props;

    return (
      <tr>
        <td>{ task }</td>
        <td>{ species }</td>
        <td>{ age }</td>
      </tr>
    ) 
  }
}
