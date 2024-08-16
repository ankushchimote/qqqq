import { useState } from 'react'

import './App.css'
import EmployList from './components/EmployList/EmployList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <EmployList/>
   </>
  )
}

export default App
