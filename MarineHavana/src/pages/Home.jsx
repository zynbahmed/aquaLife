import videoBackground from "/images/qwert.mov"
import facts from "../data/marineFacts"
import sea from "../sea.mp3"

const Home = () => {
  // console.log(videoBackground)
  const randDec = Math.random() * 40
  const randNum = Math.floor(randDec)

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
          {facts.map((fact, index) => (
            <h3 key={index}>
              {index === randNum ? `Fact:${fact.fact}` : null}
            </h3>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
