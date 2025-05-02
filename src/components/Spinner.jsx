import React, { Component } from 'react'
import loading from "../components/loading.gif";
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
            <img src={loading} alt="Loading" />
        </div>
      </div>
    )
  }
}

export default Spinner
