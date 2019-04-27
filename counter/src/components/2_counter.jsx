import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    toDo: ["German", "React", "BlockChain"]
  };

  renderDynamincally() {
    if (this.state.toDo.length === 0) return <p>No List Provided!</p>;
    return this.state.toDo.map(tag => <li>{tag}</li>);
  }

  render() {
    return (
      <div>
        <ul>{this.renderDynamincally()}</ul>
      </div>
    );
  }
}

export default Counter2;
