import react from "react";
import logo from './logo.svg';
import './App.css';
import arya from './arya.jpg'

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="menuToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {/* header */}
      <header className="App-header">
        <h1>Hi, Im Aryasena
          <br />
          <i>Welcome To My Website.</i>
        </h1>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Exploring!
        </a>
      </header>
      <img width='80%' src={arya} alt="" />
      <main>
        <div className="about">
          <div className="content">
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio beatae nihil, itaque esse recusandae iure blanditiis excepturi dolorum mollitia magni.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
