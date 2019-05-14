import React, { Component } from 'react'

export interface HelloProps { name: string; }

export default class Grid extends Component<HelloProps> {
    constructor(props: HelloProps) {
        super(props);
    }
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
