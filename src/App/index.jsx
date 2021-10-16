import React, {useState, useEffect} from 'react';
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
    console.log(amountOfNumbers);
    let provisionalArray = [];
    for(let i = 0; i < amountOfNumbers; i ++) {
      provisionalArray.push(Math.floor(Math.random() * 100));
    }
    setArray(provisionalArray);
  }

  const addNumber = () => {
    if(result.amountOfNumbers !== null && result.sumOfNumbers !== null) {
      blankResultField();
    }
    const input = Number(document.getElementById("add-number-input").value);
    if(input >= 0){
      setArray( oldArray => [...oldArray, input]);
    } else {
      alert('Negative numbers are not allowed');
    }
    blankInputFiled();
  }

  const calculateSampleVariance = () => {
    if(array.length !== 0) {
      const sumOfNumbers = array.reduce((preValue = 0, currentValue) => {
        return preValue + currentValue;
      })
      const amountOfNumbers = array.length;
  
      console.log(`Suma: ${sumOfNumbers}`);
      console.log(`Cantidad de numeros: ${amountOfNumbers}`);

      setResult({
        amountOfNumbers: amountOfNumbers,
        sumOfNumbers: sumOfNumbers
      });
    } else {
      alert('Insert an element into the array');
    }
    /* console.log(result.amountOfNumbers + result.sumOfNumbers); */
    
  }

  useEffect(() => {
    console.log(array);
  }, [array, result]);

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Sample Variance Excercise</h1>
        </header>  
        <main>
          <p>Let's Calculate the sample variance of an array of numbers.</p>
          <button type="button" onClick={randomArray}>Random Array</button>
          <div className="container-input">
            <div>
              <input type="number" min="0" minLength="1" pattern="[0-9]*" id="add-number-input" placeholder="Type a number..." required />
              <button type="button" onClick={addNumber}>Add number</button>
            </div>
          </div>
          <p>Array:</p>
          <br />
          <p className="showing-array">{JSON.stringify(array)}</p>
          {/*  */}
          
          { array.length !== 0 && 
              <button type="button" onClick={calculateSampleVariance}>Calculate</button>
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
