import React from 'react'
import { Link } from 'react-router-dom'
import pro1 from '../assets/images/Batgame_14.png'
import pro2 from '../assets/images/Batgame_4.png'
import visa from '../assets/images/saynaVisa.png'
import '../styles/Achat_avec_compte.css'


function Achat_avec_compte() {
  return (
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="../eshop">Eshop</Link></li>
              <li class="breadcrumb-item"><Link to="../eshop/panier">Panier</Link></li>
              <li class="breadcrumb-item" aria-current="page"><Link to="../eshop/panier/recap">Récapitulatif de la commande</Link></li>
              <li class="breadcrumb-item" aria-current="page"><Link to="../eshop/authentification">Authentification </Link></li>
              <li class="breadcrumb-item active" aria-current="page">Livraison et paiement</li>
            </ol>
        </nav>  
        <br />
        <div className="colonne">
            <div className="col1">
                <div className="carte1">
                    <div className="gau">
                        <h6>M. Albert Dupontel</h6>
                        <p>2 Imp. Lebois</p>
                        <p>75014 Paris</p>
                        <p>France</p>
                        <p>06** ** ** ** **</p>
                    </div>
                    <div className="droi">
                        <div className="modifier">
                            <p>Modifier</p>
                        </div>
                    </div>
                    
                </div>
                <br />

                <div className="carte1">
                    <div className="gau">
                        <h6>Méthode de livraison</h6>
                        <p>Chronopost - livraison à domicile</p>
                        <p>2 Imp. Lebois</p>
                        <p>75014 Paris</p>
                        <p>France</p>
                    </div>
                    <div className="droi">
                        <div className="modifier">
                            <p>Modifier</p>
                        </div>
                    </div>
                    
                </div>
                <br />

                <div className="carte1">
                    <div className="gau">
                        <h6>Moyen de paiement</h6>
                        <p> <img src={visa} /></p>
                        <br />
                        <p>ALBERT DUPONTEL</p>
                    </div>
                    <div className="droi">
                        <div className="modifier">
                            <p>Modifier</p>
                        </div>
                    </div>
                    
                </div>
              <div className="validerPayer">
                <button>VALIDER ET PAYER</button>
              </div>

            </div>
            <div className="col2">
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
    </div>
            </div>

</div>
  )
}

export default Achat_avec_compte