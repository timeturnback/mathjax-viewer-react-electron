import React, { Component } from 'react';
import logo from './logo.svg';
import SplitPane from 'react-split-pane';
import Editor from './editor.js';
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
    let latexString = `Tìm $m$ đề hàm số $y=\\dfrac{mx+3}{2x-m}$ đồng biến trên $(0;+\\infty)$`;
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize="50%">
          <div className="editor-pane">
            <Editor className="editor" value={this.state.markdownSrc} onChange={this.onMarkdownChange}/>
          </div>
          <div className="view-pane">
            <Latex>{this.state.markdownSrc}</Latex>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default App;