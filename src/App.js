import {Component} from 'react'
import {v4} from 'uuid'
import ResultView from './components/ResultView'

import './App.css'

class App extends Component {
  state = {
    userInput: '',
    inputsList: [],
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newInputList = {
      id: v4(),
      letter: userInput,
      length: userInput.length,
    }

    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newInputList],
      userInput: '',
    }))
  }

  InputView = () => {
    const {userInput} = this.state
    return (
      <div className="input-container">
        <h1 className="input-heading">Character Counter</h1>
        <form className="input-button-container" onSubmit={this.onClickSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Enter the Characters here"
            value={userInput}
            onChange={event => {
              this.setState({userInput: event.target.value})
            }}
            required
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {inputsList} = this.state
    return (
      <div className="bg-container">
        <div className="output-container">
          <ResultView inputsList={inputsList} />
          {this.InputView()}
        </div>
      </div>
    )
  }
}

export default App
