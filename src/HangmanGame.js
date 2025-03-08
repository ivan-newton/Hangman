import React from 'react';
import LetterBox from './LetterBox';
import SingleLetterSearchbar from './SingleLetterSearchBar';
import './App.css';

const pics = [
  'noose.png', 'upperbody.png', 'upperandlowerbody.png', 
  '1arm.png', 'botharms.png', '1leg.png', 'Dead.png'
];

const words = ["Morehouse", "Spelman", "Basketball", "Table", "Museum", "Excellent", "Fun", "React"];

class HangmanGame extends React.Component {
  state = {
    curWord: words[Math.floor(Math.random() * words.length)].toUpperCase(),
    guessedLetters: [],
    lifeLeft: 6,
  };

  handleGuess = (letter) => {
    letter = letter.toUpperCase();
    if (!this.state.guessedLetters.includes(letter)) {
      this.setState((prevState) => {
        const isCorrect = prevState.curWord.includes(letter);
        return {
          guessedLetters: [...prevState.guessedLetters, letter],
          lifeLeft: isCorrect ? prevState.lifeLeft : prevState.lifeLeft - 1,
        };
      });
    }
  };

  handlePlayAgain = () => {
    this.setState({
      curWord: words[Math.floor(Math.random() * words.length)].toUpperCase(),
      guessedLetters: [],
      lifeLeft: 6,
    });
  };

  render() {
    const { curWord, guessedLetters, lifeLeft } = this.state;
    const gameOver = lifeLeft <= 0;
    const gameWon = curWord.split('').every(letter => guessedLetters.includes(letter));

    return (
      <div className="hangman-game">
        <img src={pics[6 - lifeLeft]} alt="Hangman Stage" />
        
        <div className="word-display" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {curWord.split('').map((letter, index) => (
            <LetterBox key={index} letter={letter} isVisible={guessedLetters.includes(letter)} />
          ))}
        </div>
        
        <SingleLetterSearchbar onSearch={this.handleGuess} />
        
        {/* Used Letters Display */}
        <div className="used-letters" style={{ marginTop: '20px' }}>
          <h3>Used Letters:</h3>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {guessedLetters.map((letter, index) => (
              <LetterBox key={index} letter={letter} isVisible={true} />
            ))}
          </div>
        </div>
        
        {gameOver && <h2> Unfortunately, you lost! The word was {curWord}.</h2>}
        {gameWon && <h2>Congratulations! You won!</h2>}
        
        {(gameOver || gameWon) && (
          <button onClick={this.handlePlayAgain} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Play Again.
          </button>
        )}
      </div>
    );
  }
}

export default HangmanGame;

