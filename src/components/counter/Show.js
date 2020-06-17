import React, { Component } from 'react'

// React component
export class Show extends Component {
  render() {
    const { value } = this.props
    return (
      <div>
        <span>{value}</span>
      </div>
    )
  }
}
