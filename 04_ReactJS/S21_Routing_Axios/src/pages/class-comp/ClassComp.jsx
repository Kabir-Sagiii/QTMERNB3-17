import { Component } from "react";
class ClassComp extends Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      username: "Raj Verma",
    };
  }

  updateState = () => {
    this.setState({
      username: "Rahul sharma",
    });
  };
  render() {
    return (
      <div style={{ padding: "100px" }}>
        <h2>
          {" "}
          Class Component : {this.props.name} / {this.state.username}
        </h2>
        <button onClick={this.updateState}>Update State</button>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>BS</li>
        </ul>
      </div>
    );
  }
}

export default ClassComp;
