import React from 'react'
import {useAlert} from './alert/AlertCotext'

export default function Main() {
    const {toggle} = useAlert()
    return(
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle} className="btn btn-success">Показать Alert</button>
        </>
    )
}