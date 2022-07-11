import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ShoppingListItem(props) {

  const params = useParams()

  const [item, setItem] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/shopping-list/${params.item_id}`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])

  return (
    <div>
      <p>I am an item! I have an id of {params.item_id}</p>
      <p>{item.name}</p>
    </div>
  )
}

export default ShoppingListItem
