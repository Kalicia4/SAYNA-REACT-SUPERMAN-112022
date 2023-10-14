import React from 'react'
import '../styles/footer.css'
import logo0 from '../assets/logos/logo_0.png'
import logo1 from '../assets/logos/logo_1.png'
import logo2 from '../assets/logos/logo_2.png'
import logo3 from '../assets/logos/logo_3.png'
import logo4 from '../assets/logos/logo_4.1.png'
import logo5 from '../assets/logos/logo_5.png'
import logo6 from '../assets/logos/logo_6.png'


function Footer() {
  return (
    <footer className='container'>
        <div className="droit">
            <img src={logo0} alt=""/>
            <p> Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves</p>
        </div>
        <div className="logos">
            <img className="partenaire" src={logo1}/>
            <img className="partenaire" src={logo2}/>
            <img className="partenaire" src={logo3}/>
            <img className="reseau" src={logo4}/>
            <img  className="reseau" src={logo5}/>
            <img className="reseau" src={logo6}/>
        </div>
    </footer>
  )
}

export default Footer