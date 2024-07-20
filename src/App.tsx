import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { SearchProduct } from './components/SearchProduct'
import { VerPedido } from './components/VerPedido'


function App() {

  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/" element={<SearchProduct/>} />
        <Route path="/pedidos" element={<VerPedido/>}/>
      </Routes>
      </div>
    </Router>
    
  )
}

export default App
