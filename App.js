// import React from 'react';
// import TodoList from './TodoList';

// function App() {
//   return (
//     <div>
//       <h1>My Todo App</h1>
//       <TodoList />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  // State variables to hold inputs and result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  // Function to handle the sum calculation
  const calculateSum = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Error: Please enter valid numbers.");
    } else {
      setResult(number1 + number2);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Sum Calculator</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={styles.input}
        />
        <button onClick={calculateSum} style={styles.button}>
          Calculate Sum
        </button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  inputContainer: {
    marginTop: "20px",
  },
  input: {
    margin: "10px",
    padding: "10px",
    width: "200px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
