import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IssueForm from './components/IssueForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <IssueForm />
      </div>

    </>
  )
}

export default App
