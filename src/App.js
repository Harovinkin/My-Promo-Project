import './App.css';
// import author from './img/dmitriy.png';

function App() {
  return (
    <div className="background-image">
    <div className="author-wrapper">
    <div className="author-image-wrapper">
      {/* <img className="user-image" src={author} alt="Harovinkin Dmitriy" height="250"/> */}
    </div>
      <div className="author-description-wrapper">
      <h2 className="author-name">harovinkin<br/>dmitriy</h2>
      <p className="author-skills"><span>Junior Frontend Developer</span> | HTML, CSS, JS <br/>
      React, Redux, Hooks</p>
      </div>
    </div>
    </div>
  );
}

export default App;
