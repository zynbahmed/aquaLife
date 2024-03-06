import videoBackground from "/images/qwert.mov"
import sea from "../sea.mp3"

const Home = () => {
  const randDec = Math.random() * 40

  return (
    <div className="container dark">
      <video autoPlay muted loop id="myVideo">
        <source src={videoBackground} />
      </video>
      <audio autoPlay>
        <source src={sea} />
      </audio>
      <main>
        <div className="banner-text">
          <h1>Marine Havana</h1>
          <p>Dive into Adventure</p>
        </div>
      </main>
    </div>
  )
}

export default Home
