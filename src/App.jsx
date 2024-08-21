import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import EmployList from './components/EmployList/EmployList'
import View from './components/View/View'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Router>
      <Routes>
        {/* <Route exact path="/" component={EmployList} /> */}
        <Route path="/" element={<EmployList/>} />
        <Route path="/view/:id" element={<View/>} />
      </Routes>
    </Router>
   </>
  // <>
  // <View/>
  // </>
  )
}

export default App
