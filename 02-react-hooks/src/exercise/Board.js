import * as React from 'react'
import {calculateNextValue, calculateWinner, calculateStatus} from './04'

export function Board() {
  // const [squares, setSquares] = useLocalStorageState(
  //   'game',
  //   Array(9).fill(null),
  // )
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const nextValue = calculateNextValue(squares)
  const winner = calculateWinner(squares)
  const status = calculateStatus(winner, squares, nextValue)

  function selectSquare(square) {
    if (squares[square] || winner) return

    const squaresCopy = [...squares]

    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }

  function restart() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(i) {
    return (
      <button className="square" onClick={() => selectSquare(i)}>
        {squares[i]}
      </button>
    )
  }

  React.useEffect(() => {
    window.localStorage.setItem('game', JSON.stringify(squares))
  }, [])

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  )
}
