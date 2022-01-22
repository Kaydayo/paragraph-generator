import { useState} from 'react';
import './App.css';
import data from './data'

function App() {
  const [index, setIndex] = useState(0);
  const [texts, setTexts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(index)
    if (index <= 0) {
      amount = 1
    }
    if (index > data.length - 1) {
      amount = data.length - 1
    }
    setTexts(data.slice(0, amount))
    setIndex(0)


  }

  return (
    <>
      <main>
        <header>
          <h3>Generate a number of paragraphs</h3>
        </header>
        <h5>enter a number of paragraph below</h5>
        <div className="forms">
          <form action="">
            <label htmlFor="textValue">Enter number:</label>
            <input type="number" name="textValue" id="textValue" value={index} onChange={(e) => setIndex(e.target.value)} />
          </form>
          <button className="submit" onClick={handleSubmit}>generate</button>
        </div>
        <div className="paragraphs">
          {texts.map((text, index) => {
            return <div key={index}>
              <p>{text}</p>
            </div>
          })}
        </div>
      </main>
    </>
  );
}

export default App;
