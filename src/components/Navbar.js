import { Link } from 'react-router-dom'

function Navbar() {
  return (

    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shopping-list">Shopping list</Link>
    </div>

  )
}

export default Navbar
