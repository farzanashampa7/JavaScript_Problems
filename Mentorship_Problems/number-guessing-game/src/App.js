import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guessedNumber, setGuessedNumber] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState();

  useEffect(() => {
    randomNumGenerator();
  }, []);

  const randomNumGenerator = () => {
    let randomGeneratedNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(randomGeneratedNumber);
  };

  const handleNumberGuess = (e) => {
    let { value, min, max } = e.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    setGuessedNumber(value);
  };

  const handleAlertMessage = (number) => {
    if (number && number === randomNumber) {
      setMessage('You have guessed the right number');
    } else if (number && number < randomNumber) {
      setMessage('The number you have entered is too low');
    } else if (number && number > randomNumber) {
      setMessage('The number you have entered is too high');
    } else {
      setMessage('You need to input a number number first');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guessedNumber);
    setGuessCount(guessCount + 1);
    handleAlertMessage(guessedNumber);
    setGuessedNumber('');
  };

  return (
    <div className="w-full pt-12">
      <h1 className="text-3xl font-bold text-center">Guess a number!</h1>
      <div className="py-10">
        <form className="flex flex-col justify-center items-center">
          <label
            className="py-2 font-semibold text-center text-lg"
            htmlFor="number"
          >
            Enter a number from 1 to 100
          </label>
          <input
            required
            className="w-2/5 bg-gray-200 border-black p-2 mb-4 focus:outline-none"
            placeholder="Enter a number upto 100"
            id="number"
            name="number"
            type="number"
            min="1"
            max="100"
            value={guessedNumber}
            onChange={handleNumberGuess}
          />
          <button
            className="bg-black px-2 py-1 text-white w-20 rounded-md"
            type="submit"
            onClick={handleSubmit}
          >
            Enter
          </button>
          <p className="font-semibold text-lg pt-4">{message}</p>
        </form>
        <p className="text-center pt-6 text-lg font-semibold">
          Guess count: {guessCount}
        </p>
      </div>
    </div>
  );
}

export default App;
