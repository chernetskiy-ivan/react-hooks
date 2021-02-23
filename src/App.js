import React, {useState} from 'react'

function App() {
  //хук работает асинхронно
  const [counter, setCounter] = useState(0)

  function increment(){
    // setCounter(counter +1 )
    setCounter( (prevCounter) => {
      return prevCounter + 1
    })
    setCounter(prev => prev + 1)
  }

  function decrement(){
    setCounter(counter - 1 )
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
        <button onClick={increment} className='btn btn-success'>Добавить</button>
        <button onClick={decrement} className='btn btn-danger'>Убрать</button>
    </div>
  );
}

export default App;
