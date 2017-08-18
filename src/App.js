import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: []
    };
    this.state = {
      testo: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ testo: e.target.value });
    
  }

  handleSubmit(e) {
    this.setState({ frase: this.state.testo });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Invia</button>
        <h1>
          Ciao {this.state.frase}
        </h1>
      </div>
    );
  }
}

export default App;
