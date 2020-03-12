import React, { Component } from 'react';
import './styles/App.css';
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: 'megan',
          userInput: ''
      }
  }
    renderInputLength = (e) => {
        this.setState({userInput: e.target.value})
    }


    onClickDelete = (index) => {
        let text = this.state.userInput.split('');
        text.splice(index, 1)
        let newText = text.join('');
        this.setState({userInput: newText})
    }

  render() {
    const character = this.state.userInput.split('').map((char, index) => {
        return <Char character={char}
                     key={index}
                     onClickDelete={() => this.onClickDelete(index)}/>
    })

    return (
        <React.Fragment>
        <input type='text' onChange={this.renderInputLength} value={this.state.userInput.value}/>
            <Validation inputLength={this.state.userInput.length} />
            <p>{this.state.userInput.length}</p>
            {character}

        </React.Fragment>
    );
  }
}

export default App;
