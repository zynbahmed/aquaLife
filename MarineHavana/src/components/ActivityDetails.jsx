import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ActivityDetails = (props) => {
  let { id } = useParams()
  const [act, setAct] = useState({})

  useEffect(() => {
    let selectedAct = props.surfaces.find(
      (surface) => surface.id === parseInt(id)
    )
    setAct(selectedAct)
  }, [props.surface, id])

  return act ? (
    <div>
      <div>
        <h1>{act.title}</h1>
        <h3>{act.description}</h3>
        <h3>{act.price}</h3>
      </div>
    </div>
  ) : null
}

export default ActivityDetails
