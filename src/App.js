import './App.css';

function App() {
  return (
    <div className="background-image">
    <div className="user-wrapper">
    <div className="user-image-wrapper">
      {/* <img className="user-image" src="./img/dmitriy.png" alt="Harovinkin Dmitriy" height="200"/> */}
    </div>
      <div className="user-description-wrapper">
      <h2 className="user-name">harovinkin<br/>dmitriy</h2>
      <p className="user-skills"><span>Junior Frontend Developer</span> | HTML, CSS, JS <br/>
      React, Redux, Hooks</p>
      </div>
    </div>
    </div>
  );
}

export default App;
