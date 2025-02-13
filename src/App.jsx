import { useState } from 'react'
import './App.css'
import montagneGauche from "./assets/mountainLeft.png"
import montagneDroite from './assets/mountainRight.png'
import nuages from "./assets/clouds.png"
import homme from "./assets/aboutMontagneDroite.png"
import montagneAbout from './assets/mountain-bottom.png'
import { MapPin, Compass, Triangle} from "lucide-react"
function App() {

  return (
    <div className='mainWrapper'>
      {/* <nav>
        <img src="" alt="" />
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li><button>BOOK NOW</button></li>
        </ul>
      </nav> */}
      <header>
        <div className="titleWrapper">
          <h1 className='h1title'>EXPLORE <br /> THE MOUNTAIN</h1>
          <p className='underTitle'>Live your dream and explore</p>
          <p className='underlineP'>Explore now</p>
        </div>
          <img src={montagneGauche} className='montagneGauche' alt="Montagne placer sur la gauche de l'ecrant avec un effet de paralaxe" />
          <img src={montagneDroite} className='montagneDroite' alt="Montagne placer sur la droite de l'ecrant avec un effet de paralaxe" />
          <img src={nuages} className='nuages' alt="Nuages surplombe la montagne" />
      </header>
      <section className="about">
      <div className="titleWrapperAbout">
          <h2 className='h2Title'>Hiking the <br /> <span className='underline'>An</span>cient Pine Forest</h2>
          <div className="infoP">
            <p className='aboutP'><Triangle/> 3,420m (11,188ft)</p>
            <p className='aboutP'><Compass/>37°23'8.42''N  118°10 43.91''E</p> 
          </div>
          <p className='aboutP'> <MapPin/>Inyo National Forest</p>
          <p className='aboutTxt'>
            What makes this hike truly special is the sense of connection it fosters. Walking among these towering trees, one can’t help but feel a deep appreciation for the enduring beauty of nature. The stillness, the history, and the sheer grandeur of the landscape make it an experience that lingers long after the journey ends.
            For those seeking a hike that blends adventure with tranquility, the ancient pine forest offers a path through time—one step at a time.
          </p>
        </div>
        <img src={homme} className='montagneDroiteAbout' alt="Un homme qui se tient sur une montagne" />
        <img src={montagneAbout} className='montagneBottom' alt="Montagne placer en bas de la section about pour creer un effet de paralaxe" />
      </section>
      <section className="blc"></section>
    </div>
  )
}

export default App
