import React from 'react';
import './App.css';

function App() {
  function showMessage() {
    document.getElementById("message").innerHTML = "Skrypt JavaScript działa!"
  }

  return (
    <div className="App">
      <h1>Moja pierwsza zhostowana aplikacja PWA</h1>
      <p>Witaj świecie!</p>

      <button onClick={showMessage}>Przycisk</button>
      <p id="message"></p>
    </div>
  );
}

export default App;