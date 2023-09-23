import React from "react";
import { useState, useEffect } from 'react'

import SearchIcon from './search.svg'

import './App.css'

const App = () => {
    return (
        <div className="app">
            <h1>Dicionário</h1>

            <div className="search">
                <input 
                    placeholder="Palavra"
                    value="dicionário"
                    onChange={(e) => {}}
                />

                <img 
                src={SearchIcon} 
                alt="search"
                onClick={() => {}}
                />
            </div>


        </div>
    )
}

export default App