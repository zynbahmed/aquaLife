import { Link } from 'react-router-dom'
// import './Activity.module.css'

const Activity = ({ event }) => {
  return (
    <section className="articles">
      {event.map((ev)=>(

        <article>
        <div className="article-wrapper">
          <figure>
            <img src={ev.image} alt="" />
          </figure>
        </div>
        <div className="activity-container">
          <div className="activity-card">
            <Link to={ev._id}>
              <div className="article-body">
                <h1>{ev.title}</h1>
                <p className="price">{ev.price}</p>
                <div>
                  <a href="#" className="read-more">
                    {' '}
                    Read more
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
        ))}
    </section>
  )
}

export default Activity
