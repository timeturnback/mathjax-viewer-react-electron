import React, { Component } from 'react';
import logo from './logo.svg';
import SplitPane from 'react-split-pane';
import Editor from './editor.js';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      markdownSrc: `Phương trình $x^4-2x^2-3+m=0$ có $4$ nghiệm phân biệt khi và chỉ khi`,
    }
  }

  onMarkdownChange = (md) => {
    this.setState({
      markdownSrc: md
    });
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <div className="editor-pane">
            <Editor className="editor" value={this.state.markdownSrc} onChange={this.onMarkdownChange}/>
          </div>
          <div className="view-pane">
            <h3>
                <Latex>{this.state.markdownSrc}</Latex>
            </h3>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;