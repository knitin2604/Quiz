import React from 'react'
import ReactDom from 'react-dom';
import Navbar from './Navbar'
import Quiz from './Quiz'

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
        <Quiz></Quiz>
        </div>
    )
}


const rootElement = document.getElementById('root')
ReactDom.render(<App></App>,rootElement)