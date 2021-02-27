import React from 'react'

export default function Main({toggel}) {
    return(
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggel} className="btn btn-success">Показать Alert</button>
        </>
    )
}