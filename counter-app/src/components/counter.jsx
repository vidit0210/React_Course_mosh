import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    // tags: []
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  rengerTags() {
    if (this.state.tags.length == 0) return <p>No Elemenents Available</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  increment() {
    let { count } = this.state;
    return (count += 1);
  }
}

export default Counter;
