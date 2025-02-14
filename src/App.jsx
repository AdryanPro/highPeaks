import { useEffect, useState } from 'react'
import './App.css'
import logo from "./assets/logoHighPeaks.png"
import montagneGauche from "./assets/mountainLeft.png"
import montagneDroite from './assets/mountainRight.png'
import nuages from "./assets/clouds.png"
import homme from "./assets/aboutMontagneDroite.png"
import montagneAbout from './assets/mountain-bottom.png'
import service1 from './assets/services1.png'
import service2 from './assets/services2.png'
import service3 from './assets/services3.png'
import serviceMontaigne from "./assets/mountains-bottom-service.png"
import Jhon from "./assets/Jhon.png"
import Lina from "./assets/Lina.png"
import { MapPin, Compass, Triangle} from "lucide-react"
import AOS from 'aos';
import "aos/dist/aos.css";
import bottomMountain from "./assets/theLastMountain.png"
import logoFooter from "./assets/logoFooter.png"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once
    });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className='mainWrapper'>
      <nav>
      <div className="nav-container">
        <img src={logo} alt="Logo" />
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li><button className="btnBookNowNav">BOOK NOW</button></li>
        </ul>
      </div>
      </nav>
      <header>
        <div className="titleWrapper">
          <h1 data-aos="fade-up" className='h1title'>EXPLORE <br /> THE MOUNTAIN</h1>
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

      <section className="services">
        <div className='servicesTitleWrappe'>
          <h2 className='serviceH2'>Our Services</h2>
          <p className='serviceP'>At the heart of what we do is a commitment to providing exceptional 
            service tailored to your needs. With a focus on quality, efficiency, 
            and customer satisfaction, we ensure that every project is handled with 
            precision and professionalism.
          </p>
        </div>
        <div className="servicesWrapper">
          <img src={service1} alt=""/>
          <img src={service2} alt=""/>
          <img src={service3} alt=""/>
        </div>
        <img data-aos="fade-up" src={serviceMontaigne} className='montagneBottom montagneService' alt="Montagne placer en bas de la section about pour creer un effet de paralaxe" />
      </section>

      <section className="guide-trails">
        <div className="guide">
          <h2>Guide</h2>
          <div className="underlineGuide"></div>
          <div className="guide-list">

            <div className="guide-card">
              <div className="guide-header">
                <img src={Jhon} alt="Jhonne Towner" className="guide-img" />
                <div className="guide-info">
                  <h3>Jhone Towner</h3>
                  <p className="role">Photographer</p>
                </div>
              </div>
              <p className="description">
                One of my favourite places to take pictures
              </p>
            </div>

            <div className="guide-card">
              <div className="guide-header">
                <img src={Lina} alt="Lina Darja" className="guide-img" />
                <div className="guide-info">
                  <h3>Lina Darja</h3>
                  <p className="role">Guide</p>
                </div>
              </div>
              <p className="description">
                The best place to hike during summer
              </p>
            </div>
          </div>
        </div>

        <div className="trails">
          <h2>Trails</h2>
          <div className="underlineGuide"></div>
          <p className="trails-description">
            Winding through breathtaking landscapes, trails offer more than just
            a path—they invite exploration, discovery, and a deep connection with
            nature. Whether leading through dense forests, across rugged
            mountains, or along serene coastlines, each trail tells its own story.
          </p>
          <div className="trail-info">
            <div className="trail">
              <h3>Schulman Grove</h3>
              <p>Distance: <strong>13 km</strong></p>
              <p>Time: <strong>5h</strong></p>
            </div>
            <div className="trail">
              <h3>Patriarch Grove</h3>
              <p>Distance: <strong>9 km</strong></p>
              <p>Time: <strong>3.7h</strong></p>
            </div>
          </div>
        </div>
        <img src={bottomMountain} className="theLastMountain" />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="High Peaks Logo" />
            <p className="footer-text">SPORTS AND NATURE</p>
          </div>
          <nav className="footer-nav">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#book">BOOK NOW</a></li>
            </ul>
          </nav>
        </div>
        <hr className="footer-line" />
      </footer>



    </div>
  )
}

export default App
