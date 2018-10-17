import React, { Component } from 'react';
import './editor.css';

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  updateCode = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <form>
        <textarea className="input"
          value={this.props.value} 
          onChange={this.updateCode}
          />
      </form>
    );
  }
}
export default Editor;