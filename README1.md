This is a simple Hangman Game built with React.js. The goal is to guess the hidden word before you run out of lives/ guesses. Each incorrect guess adds a new part to the hangman. 
If the full hangman is drawn, you lose! The hangman consists of 6 body parts, so be mindful of how many incorrect guesses you have!

How It Works:
The parent component (HangmanGame.js) manages the game's state, including the secret word, guessed letters, and remaining lives.
The LetterBox.js component displays letters in the word, showing them only when correctly guessed.
The SingleLetterSearchBar.js allows users to enter and submit their letter guesses.
A series of hangman images visually represent the number of incorrect guesses.
The game ends when you guess the word or when the hangman is fully drawn.
A "Used Letters" section displays letters that have already been guessed.
A "Play Again" button lets you restart the game with a new word.

# Running the Application:
You'll need Node.js and Git installed on your computer.

1. Download the Project
Open your terminal and enter the following commands:
# Clone the repository to your local machine
git clone https://github.com/ivan-newton/Hangman.git

# Navigate into the project folder
cd Hangman

2. Install Dependencies
Once inside the project folder, install the necessary dependencies:
npm install

4. Start the Project
Run the following command to start the game:
npm start

6. Open in Browser
After running the command, the default browser will open the application at:
http://localhost:3000
