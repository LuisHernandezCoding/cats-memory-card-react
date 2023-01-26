import { useState } from 'react';

import './App.css';
import ParallaxScrolling from './components/helpers/ParallaxScrolling';
import Footer from './components/layout/Footer';
import Title from './components/helpers/Title';

import cats01 from './images/cats-01.jpg';
import cats02 from './images/cats-02.jpg';
import cats03 from './images/cats-03.jpg';
import cats04 from './images/cats-04.jpg';
import cats05 from './images/cats-05.jpg';
import cats06 from './images/cats-06.jpg';
import cats07 from './images/cats-07.jpg';
import cats08 from './images/cats-08.jpg';
import cats09 from './images/cats-09.jpg';
import cats10 from './images/cats-10.jpg';

const Cats = {
  'Pixel Purrfect': cats01,
  'Byte Whiskers': cats02,
  'Binary Clawson': cats03,
  'Data Whiskers': cats04,
  'Byte Futuremeow': cats05,
  'Circuit Catnip': cats06,
  'Cybertail Claw': cats07,
  'Neocat Furr': cats08,
  'Mecha Paws': cats09,
  'Techno Feline': cats10,
};

function App() {
  const [cats, setCats] = useState(Cats);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCats, setClickedCats] = useState([]);

  const shuffleCats = (cats) => {
    const catsArray = Object.keys(cats).map((cat) => [cat, cats[cat]]);
    for (let i = catsArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [catsArray[i], catsArray[j]] = [catsArray[j], catsArray[i]];
    }
    setCats(Object.fromEntries(catsArray));
  };

  const handleClick = (cat) => {
    if (clickedCats.includes(cat)) {
      setScore(0);
      setClickedCats([]);
    } else {
      setScore(score + 1);
      setClickedCats([...clickedCats, cat]);
      if (score + 1 >= highScore) {
        setHighScore(score + 1);
      }
    }
    shuffleCats(Cats);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="box">
          <header>
            <Title title="Space Cats Memory Card" size={1} />
          </header>
          <main>
            <div className="grid-container">
              {Object.keys(cats).map((cat) => (
                <div
                  key={cat}
                  className="grid-item"
                  id={cat}
                  onClick={() => handleClick(cat)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleClick(cat);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <img src={Cats[cat]} alt={cat} />
                  <Title title={cat} size={5} />
                </div>
              ))}
            </div>
          </main>
          <footer>
            <div className="score-container">
              <div>
                <span className="score-text">Score:</span>
                <span className="score-number">{score}</span>
              </div>
              <div>
                <span className="score-text">High Score:</span>
                <span className="score-number">{highScore}</span>
              </div>
            </div>
          </footer>
        </div>
        <Footer />
      </div>
      <ParallaxScrolling />
    </div>
  );
}

export default App;
