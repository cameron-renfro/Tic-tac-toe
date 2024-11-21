import './App.css';
import Square from './pages/Square';

function Board() {
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='board'>
      {board.map((item: number) => (
        <Square key={item} square={item} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <Board />
      </div>
    </>
  );
}

export default App;
