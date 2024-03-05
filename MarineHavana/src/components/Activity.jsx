import { Link } from "react-router-dom"
// import './Activity.module.css'

const Activity = ({ event }) => {
  return (
    <section className="articles">
      {event.map((ev) => (
        <article>
          <div className="article-wrapper">
            <figure>
              <img src={ev.image} alt="" />
            </figure>
          </div>
          <div className="activity-container">
            <div className="activity-card">
              <div className="article-body">
                <h1>{ev.title}</h1>
                <p className="price">{ev.price}</p>
                <Link to={ev._id} className="read-more">
                  <div>Read more</div>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Activity
