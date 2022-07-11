import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// comments for version five
// import { useHistory } from 'react-router-dom'

function FourOhFour() {

  const navigate = useNavigate()

  // const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
      // history.push('/')
    }, 4000)
  }, [])

  return (
    <h1>404 Not Found</h1>
  )
}

export default FourOhFour
