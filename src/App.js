import React, {useState, useEffect} from 'react'

let renderCount = 1

function App() {

  //const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  useEffect(() => {
    renderCount++
  })


  return (
    <div>
      <h1>Количество рендеров: {renderCount}</h1>
      <input type='text' onChange={e => setValue(e.target.value)} value={value}/>
    </div>
  );
}

export default App;
