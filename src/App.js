
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './azerty.png'
function App() {
  return (
    <div className="app">
<div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
<h1 className="title red">Your name here</h1>

<br />
<div className="img">
<img src={img} alt='' />

  <br />
  <img className='im' src="./174857.png" />
</div>
</div>

<video width="420" height="340" controls>
<source src="./qwerty.mp4" />
</video>
    </div>
  );
}

export default App;
