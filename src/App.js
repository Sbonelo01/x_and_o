// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>X and O</h2>
//         </div>
//         <p className="App-intro">
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'

//This will be the header
// class App extends component {
//   render(){
//     return(
//       <div className="App">
//         <div className="App-Header">
//           <h2>X AND O</h2>
//         </div>
//       </div>
//     );
//   }
// }

class square extends React.Component {
  render(){

    return(
    <button>send</button>
    }
  )
}

class Square extends React.Component {

  constructor(props){
    super(props)
    this.state = {value : null,}
  }

  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})}
        >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        squares: Array(9).fill(null),
      }
    }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);