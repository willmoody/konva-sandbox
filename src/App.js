import React, { Component } from 'react';
import logo from './logo.svg';
import Konva from 'konva';
import { Layer, Rect, Stage, Group } from 'react-konva';
import './App.css';

class MyRect extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      color: 'green'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
        color: Konva.Util.getRandomColor()
      });
  }
  render() {
    return (
      <Rect
        x={10} y={10} width={50} height={50}
        fill={this.state.color}
        shadowBlur={10}
        onClick={this.handleClick}
      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <MyRect />
        </Layer>
      </Stage>
    );
  }
}

export default App;
