import React,{useState} from 'react'

function complexCompute(number) {
    let i = 0
    while(i < 1000000000) i++
    return number * 2
}

function App() {

    const [number, setNumber] = useState(42)

    const computed = complexCompute(number)

  return (
    <div>
        <h1>Вычисляемое ссвойство: {computed}</h1>
        <button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
        <button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
    </div>
  );
}

export default App;