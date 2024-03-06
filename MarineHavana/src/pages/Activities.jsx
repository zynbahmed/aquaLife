import Client from "../services/api"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Search from "../components/Search"
import axios from "axios"
import Activity from "../components/Activity"
import "../components/Activity.css"
const Activities = ({ user }) => {
  let nav = useNavigate()

  const searchRef = useRef(null)
  const [activity, setActivity] = useState([])
  const [searchRes, setSearchRes] = useState([])
  const [clicked, setClicked] = useState(false)
  const [event, setEvent] = useState([])

  useEffect(() => {
    Client.get("activities")
      .then((response) => {
        setActivity(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = searchRef.current.value.toLowerCase()
    const activities = activity.filter((act) =>
      act.title.toLowerCase().includes(searchTerm)
    )
    setSearchRes(activities)
    setClicked(true)
  }

  const getActivity = async () => {
    let allList = await axios.get("http://localhost:3001/activities")
    // console.log(allList)
    setEvent(allList.data)
  }

  useEffect(() => {
    getActivity()
  }, [])

  const handleCreate = () => {
    nav("/createActivity")
  }

  return (
    <div className="activities-background">
      <h1>Activity List</h1>
      <Search onSubmit={handleSubmit} searchRef={searchRef} />
      {clicked ? (
        searchRes.length > 0 ? (
          <Activity key={searchRes._id} event={searchRes} />
        ) : (
          <h1>No Result Found</h1>
        )
      ) : (
        <>
          <Activity key={event._id} event={event} />
        </>
      )}
      {user.userType === "admin" && (
        <div>
          <h1 className="create-surface-activity">Create Surface Activity</h1>
          <button className="create-surface-button" onClick={handleCreate}>
            CREATE ACTIVITY
          </button>
        </div>
      )}
    </div>
  )
}

export default Activities
