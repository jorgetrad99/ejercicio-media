import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ array, setArray] = useState([]);


  const randomArray = () => {
    const amountOfNumbers = Math.floor(Math.random() * (30 - 5) + 5);
    console.log(amountOfNumbers);
    let provisionalArray = [];
    for(let i = 0; i < amountOfNumbers; i ++) {
      provisionalArray.push(Math.floor(Math.random() * 100));
    }
    setArray(provisionalArray);
  }

  const addNumber = () => {
    const input = Number(document.getElementById("add-number-input").value);
    console.log(input);
    setArray( oldArray => [...oldArray, input]);
    /* let provisionalArray = array;
    provisionalArray.push(input);
    console.log(`ArrayB: ${provisionalArray}`);
    setArray(provisionalArray); */
    console.log(array);
  }

  useEffect(() => {
    console.log(array);
  }, [array]);

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
              <input type="number" id="add-number-input" placeholder="Type a number..." />
              <button type="button" onClick={addNumber}>Add number</button>
            </div>
          </div>
          <p>Array:</p>
          <br />
          <p className="showing-array">{JSON.stringify(array)}</p>
          
          <button>Calculate</button>
          <br />
          
          <h2>Calculated sample variance:</h2>

        </main>
      </div>

    </React.Fragment>
  );
}

export default App;
