import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import FourOhFour from './FourOhFour'
import ShoppingList from './ShoppingList'
import ShoppingListItem from './ShoppingListItem'
import Navbar from './Navbar'

function App() {

  const [name, setName] = useState('Chett')

  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<Home name={name} />} />

        <Route path='/about' element={<About/>} />

        <Route path='/shopping-list' element={<ShoppingList/>} />

        <Route path='/shopping-list/:item_id' element={<ShoppingListItem/>} />

        <Route path='*' element={<FourOhFour/>} />

      </Routes>

    </div>
  );
}

export default App;
