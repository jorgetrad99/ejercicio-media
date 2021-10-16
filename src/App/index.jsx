import React from 'react';
import './App.css';

function App() {
  const [ array, setArray] = React.useState([]);

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
    const element = document.getElementById("intro");
    let provisionalArray = array;
    /* provisionalArray.push */
  }

  React.useEffect(() => {
    console.log('Hola');
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
              <button type="button">Add number</button>
            </div>
          </div>
          <p>Array: {JSON.stringify(array)}</p>
          <br />
          <button>Calculate</button>
          <br />
          <br />
          
          <h2>Calculated sample variance:</h2>

        </main>
      </div>

    </React.Fragment>
  );
}

export default App;
