import React,{useState, useMemo, useEffect} from 'react'

function complexCompute(number) {
    console.log('complexCompute')
    let i = 0
    while(i < 1000000000) i++
    return number * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored])

    //в useMemo указываем список зависимостей во втором параметре и мы увидим что
    //изменить state colored не будет задерживаться
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Styles changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button className='btn btn-success' onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className='btn btn-danger' onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
}

export default App;