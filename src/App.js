
import './App.css';
import { Link } from 'react-router-dom';
import Img from "./imgs/beer.png"
import cups from "./imgs/cups.png"

function App() {

  return (
    <div className="App">
      <h1>home</h1>
      <article className='wrapper'>
        <img src={Img} alt="beer" />
        <div className='banner'>
          <Link to='/AllBeer' className='banner-header'>All Beers</Link>
        </div>
        <div className="text">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Justo, a, eleifend vitae varius venenatis.</p></div></article>
      <article className='wrapper'>
        <img src={cups} alt="cupsOfbeer" />
        <div className='banner'>
          <Link to='/Random' className='banner-header'>Random Beer</Link>
        </div>
        <div className="text">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Justo, a, eleifend vitae varius venenatis.</p></div>
      </article>
    </div >
  );
}

export default App;
