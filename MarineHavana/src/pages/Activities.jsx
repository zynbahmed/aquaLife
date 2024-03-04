import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Activities = (props) => {
  let nav = useNavigate()
  useEffect(() => {
    props.getActivity()
  }, [])

  const handleCreate = () => {
    nav('/createActivity')
  }
  console.log(props.activities)

  return (
    <div className="container">
      <h1>this is surface</h1>
      {props.activities.map((surface) => (
        <div className="">
          <Link to={`${surface._id}`}>
            <div className="">
              <h1>{surface.title}</h1>
              <h3>{surface.description}</h3>
              <h3>{surface.price}</h3>
            </div>
          </Link>
        </div>
      ))}
      <button onClick={handleCreate}>Create Surface Activity</button>
    </div>
  )
}

export default Activities
