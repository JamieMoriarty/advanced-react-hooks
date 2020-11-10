// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const useCount = () => {
  const countContext = React.useContext(CountContext)
  
  if (!countContext) {
    throw new Error('This hook can only be used within CountContext component')
  }
  return countContext
}

const CountProvider = (props) => {
  const value = React.useState(0)

  return <CountContext.Provider {...props} value={value}/>
}

function CountDisplay() {
  const [ count ] = useCount()

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CountContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
      {/*<CountDisplay /> <--- this throws an error if uncommented*/}
    </div>
  )
}

export default App
