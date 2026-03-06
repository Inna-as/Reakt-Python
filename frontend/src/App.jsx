import { useState } from 'react'

import Header from './components/UI/Header/Header'


function App() {
  const [count, setCount] = useState(0)
return (
<>
  <Header />
  <h1>Счетчик кликов</h1>
    <button onClick={() => setCount(count + 1)}>
      Клик: {count}
    </button>
</>
)
}
export default App
