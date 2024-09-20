import './index.css'

const InputView = () => {
  const onAddLetter = () => {}
  return (
    <div className="input-container">
      <h1 className="input-heading">Character Counter</h1>
      <form className="input-button-container" onSubmit={onAddLetter}>
        <input
          type="text"
          className="input"
          placeholder="Enter the Characters here"
        />
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  )
}

export default InputView
