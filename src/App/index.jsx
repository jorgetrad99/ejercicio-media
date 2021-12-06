import React, {useState} from 'react';
import './App.css';
import formula from '../formula.svg';

function App() {
  const [ array, setArray] = useState([]);
  const [ result, setResult ] = useState({
    sumOfNumbers: null,
    amountOfNumbers: null
  })

  const blankResultField = () => {
    setResult({
      amountOfNumbers: null,
      sumOfNumbers: null
    });
  }

  const blankInputFiled = () => {
    var input = document.getElementById("add-number-input");
    input.value = "";
  }

  const randomArray = () => {
    if(result.amountOfNumbers !== null && result.sumOfNumbers !== null) {
      blankResultField();
    }
    const amountOfNumbers = Math.floor(Math.random() * (30 - 5) + 5);
    let provisionalArray = [];
    for(let i = 0; i < amountOfNumbers; i ++) {
      provisionalArray.push(Math.floor(Math.random() * 100));
    }
    setArray(provisionalArray);
  }

  const resetArray = () => {
    setArray([]);
    blankResultField();
  }

  const addNumber = () => {
    const input = document.getElementById("add-number-input").value;
    if(input) {
      const number = Number(input);
      if(number >= 0){
        setArray( oldArray => [...oldArray, number]);
      } else {
        alert('Negative numbers are not allowed');
      }
      blankInputFiled();
    } else {
      alert('Type a number');
    }
  }

  const popArrayElement = () => {
    array.pop();
    const popedArray = array;
    setArray(() => [...popedArray]);
  }

  const calculateSampleVariance = () => {
    if(array.length !== 0) {
      const sumOfNumbers = array.reduce((preValue = 0, currentValue) => {
        return preValue + currentValue;
      })
      const amountOfNumbers = array.length;

      setResult({
        amountOfNumbers: amountOfNumbers,
        sumOfNumbers: sumOfNumbers
      });
    } else {
      alert('Insert an element into the array');
    }    
  }

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Sample Variance Excercise</h1>
        </header>  
        <main>
          <p>Let's Calculate the sample variance of an array of numbers.</p>
          <button type="button" onClick={randomArray}>Random Array</button>
          <button type="button" onClick={resetArray}>Reset Array</button>
          <button type="button" onClick={popArrayElement}>Pop last element</button>
          <div className="container-input">
            <div>
              <input type="number" min="0" minLength="1" pattern="[0-9]*" id="add-number-input" placeholder="Type a number..." required />
              <button type="button" onClick={addNumber}>Add number</button>
            </div>
          </div>
          <p>Array:</p>
          <br />
          <p className="showing-array">{JSON.stringify(array)}</p>
          { 
            (array.length !== 0) && 
              <button type="button" onClick={calculateSampleVariance}>
                Calculate
              </button>
          }

          { (result.amountOfNumbers !== null && result.sumOfNumbers !== null) &&
            <React.Fragment>
              <h3>Applying the mean formula to obtain the result</h3>
              <br />
              <img src={formula} width="320rem" alt="Formula of the sample variance" />
              <br />
              <br />
              <p>Sum of the Terms: {result.sumOfNumbers}</p>
              <div id="container-line">
                <hr width="250rem" />
              </div>
              <p>Number of the Terms: {result.amountOfNumbers}</p>
              <br />
              <h3>Calculated sample variance:</h3>
              <p>{result.sumOfNumbers / result.amountOfNumbers}</p>
              <br />
            </React.Fragment>
          }
        </main>
      </div>

    </React.Fragment>
  );
}

export default App;
