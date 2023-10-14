import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Commande.css'
import pro1 from '../assets/images/Batgame_14.png'
import pro2 from '../assets/images/Batgame_4.png'

function Commande() {
  return (
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="../eshop">Eshop</Link></li>
              <li class="breadcrumb-item"><Link to="../eshop/panier">Panier</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Récapitulatif de la commande</li>
            </ol>
        </nav>
        <div className="conteneur">
            <div className="bleu">
                <h4>Commande</h4>

                        <div className="achat">
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
    
        </div>

        <div className="achat">
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
        </div>

        <form className="code" >
          <input type="text" placeholder="Code promo" className="zone"/>
          <input type="submit" value="Ajouter" className="ajouter"/>
        </form>

        <div className="chiffre">
          <div className="calcul">
            <h6>Total</h6>
            <p>58,99</p>
          </div>
          <p>Réduction</p>
          <p>Taxe</p>
         
        </div>
        <div className="calcul">
            <h6>Total</h6>
            <p>58,99</p>
        </div>


      </div>
     
    </div>
    <div className="bas">
        <button className="btn1"><Link to="../eshop/panier/">REVENIR AU PANIER</Link></button>
        <button className="btn2"><Link to="../eshop/authentification">VALIDER MON ACHAT</Link></button>
    </div>
  </div>
    
  )
}

export default Commande