import './index.css'

const ResultView = props => {
  const {inputsList} = props

  return (
    <div className="result-container">
      <h1 className="result-heading">Count the characters like a Boss...</h1>
      {inputsList.length !== 0 ? (
        <ul className="output-inner-container">
          {inputsList.map(eachItem => (
            <li className="output" key={eachItem.id}>
              <p>
                {eachItem.letter} : {eachItem.length}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <img
          className="no-result-image"
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
      )}
    </div>
  )
}

export default ResultView
