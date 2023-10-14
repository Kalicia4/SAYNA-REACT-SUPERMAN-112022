import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Produits.css'
import chariot from '../assets/icones/icone_1.png'
import pro1 from '../assets/images/Batgame_14.png'
import pro2 from '../assets/images/Batgame_4.png'

function Produits() {
  return (
    <div className="tout">
 <div className="container bg-black">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="../eshop">Eshop</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Panier</li>
            </ol>
        </nav>
        <div className="char">
            <img src={chariot}/>
        </div>
        <div className="l1">
         <h6>Récapitulatif du panier</h6>
        </div>
        <div className="achatProd">
          <div className="g">
            <div className="prod">
              <img src={pro1} />
            </div>
            <div className="infop">
              <div className="elem">
                <h4>Figurine du joker</h4>
                <p>Numéro de produit X-----</p>
              </div>
              
            </div>
          </div>
          <div className="d">
            <h3>43</h3>
            <input type="number" min="1" />
          </div>
        </div>

        <div className="achatProd">
          <div className="g">
            <div className="prod">
              <img src={pro2} />
            </div>
            <div className="infop">
              <div className="elem">
                <h4>Poster Harley Quinn x5</h4>
                <p>Numéro de produit X-----</p>
              </div>
              
            </div>
          </div>
          <div className="d">
            <h3>9,9</h3>
            <input type="number" min="1" />
          </div>
        </div>
        <br />
        <div className="total">
          <div className="sous">
            <h4>SOUS TOTAL   </h4> <h4>52,9</h4>
          </div>
        </div>

        <div className="bas">
          <button className="bt">CONTINUER MES ACHATS</button>
          <button className="bt"> <Link to="/eshop/panier/recap">PASSER LA COMMANDE</Link></button>
        </div>
    </div>
  
  </div>
   
  )
}

export default Produits