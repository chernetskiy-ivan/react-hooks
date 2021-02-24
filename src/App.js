import React, {useState, useEffect, useRef} from 'react'

//let renderCount = 1

function App() {

  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  //useRef ввозвращает объект
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current)
  })


  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <input ref={inputRef} type='text' onChange={e => setValue(e.target.value)} value={value}/>
    </div>
  );
}

export default App;
