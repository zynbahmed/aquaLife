import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-main">
    <div className="about-wrapper">
      <main>
        <h1 className="h-about">About the<p/>
         Marine Havana</h1>
         
        <p className="p-about2">
        
          Marine Havana offers a gateway to unparalleled marineadventures.
          Whether you are a thrill-seeker, nature enthusiast, or simply seeking tranquility by the sea, our diverse range 
          of activities caters to all
          interests.
        </p>
        <div>
        <Link className="cta alt" to="/activity">Read More</Link>
        </div>
      </main>
    </div>
      <div className="about-image"></div>
    </div>
  )
}

export default About
