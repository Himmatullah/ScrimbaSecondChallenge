import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data.js'
function App() {
  const entryElement = data.map((entry) => {
    return (
      <Entry 
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })
  return (
    <>
      <Header />
        <main className='container'>
          {entryElement}
        </main>  
    </>
  )
}

export default App
