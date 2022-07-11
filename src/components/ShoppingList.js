import { useState, useEffect } from 'react'

function ShoppingList() {

  const [list, setList] = useState([])

  useEffect(() => {
    console.log("fetching data")

    fetch('shoppinglistURL')
    .then(res => res.json())
    .then(setList)
  }, [])

  return (
    <div className="">
      <h1>Shopping List</h1>
      {/* mappedShoppingItem */}
    </div>

  )
}

export default ShoppingList
