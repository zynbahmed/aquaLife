import { useState } from 'react'
import Surface from '../components/Surface'
import Underwater from '../components/Underwater'
import Activity from '../components/Activity'

const Activities = () => {
  const [surface, setSurface] = useState(false)
  const [under, setUnder] = useState(false)

  const handleClickSur = () => {
    setSurface(true)
    setUnder(false)
  }
  const handleClickUn = () => {
    setUnder(true)
    setSurface(false)
  }

  const activityChooser = () => {
    if (surface) {
      return <Surface />
    } else if (under) {
      return <Underwater />
    }
  }

  return (
    <div>
      <h1>Activities</h1>
      <button onClick={handleClickSur}>Surface</button>
      <button onClick={handleClickUn}>Underwater</button>
      {activityChooser()}
    </div>
  )
}

export default Activities
