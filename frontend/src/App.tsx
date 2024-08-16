

import './index.css'
import React from 'react'
import { Button } from './components/ui/button'
function App() {
  

  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5 rounded-lg">
        Hello World
      </h1>
      <Button variant={'default'}>Click me</Button>
       
    </>
  )
}

export default App
