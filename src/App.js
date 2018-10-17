import React, { Component } from 'react';
import logo from './logo.svg';
import { Context, Node } from 'react-mathjax';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './App.css';

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))';
const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `\\int_0^\\infty x^2 dx`,
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <label>
            Math :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <BlockMath math={this.state.value}/>
      </div>
    );
  }
}

export default App;
