import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Header() {
    return (
      <div >
        <h1>La maison jungle</h1>
        <p> Bienvenue dans la jungle</p>
      </div>
    )
  }
function Description() {
      return (<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌵🌱🎍</p>)
  }
function Banner() {
  return (<div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <Header />
      <Description />
  </div>)
}

export default Banner