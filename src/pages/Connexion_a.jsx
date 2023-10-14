import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Connexion_a.css'
import pro1 from '../assets/images/Batgame_14.png'
import pro2 from '../assets/images/Batgame_4.png'

function Connexion_a() {
  return (
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="../eshop">Eshop</Link></li>
              <li class="breadcrumb-item"><Link to="../eshop/panier">Panier</Link></li>
              <li class="breadcrumb-item" aria-current="page"><Link to="../eshop/panier/recap">Récapitulatif de la commande</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Authentification</li>
            </ol>
        </nav>  
        <div className="colonne">
            <div className="col1">
              <h6 className="authentification">Authentification</h6>
                         
                        <div className="div2 con">
                            <div className="bord">
                              <h4>Connexion</h4>
                            <div className="div3 formulaire">
                                <h6>Identifiant</h6>
                                <div className="champ">
                                    <input type="text" placeholder="email"/>
                                 </div>
                                <br />
                                <h6>Mot de passe</h6>
                                <div className="champ">
                                    <input type="text" placeholder="mot de passe" />
                                </div>
                                <br />
                                <p>mot de passe oublié</p>
                                <div className="valider">
                                    <button className="btnValid">VALIDER</button>
                                </div>
                            </div>
                            </div>
                           
                        
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
        
      <div className="formul">
        <div className="titre1">
          <h4>Achat sans inscription</h4>
        </div>
        <br />
        <h6>Saisissez les informations pour la livraison :</h6>
        <form className='connex_a' >
          <div className="nomlong">
            <div className="lastname">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder='nom'/>
            </div>
            <div className="firstname">
              <label htmlFor="">Prenom</label>
              <input type="text" placeholder='prenom' />
            </div>
          </div>
          <br />
          <div className="formmail">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='mail' />
          </div>
          <br />
          <div className="formmail">
            <label htmlFor="">Adresse</label>
            <input type="text" placeholder='adresse'/>
          </div>
          <br />
          <div className="nomlong">
            <div className="lastname">
              <label htmlFor="">Code Postal</label>
              <input type="text" placeholder='code postal' />
            </div>
            <div className="firstname">
              <label htmlFor="">Ville</label>
              <input type="text" placeholder='ville' />
            </div>
          </div>
          <br />
          <div className="formmail">
            <label htmlFor="">Pays</label>
            <input type="text" placeholder='pays' />
          </div>
          <br />
          <div className="formmail">
            <label htmlFor="">Numéro de téléphone</label>
            <input type="text" placeholder='numéro de téléphone' />
          </div>
          <div className="check">
            <div className="l1">
              <input type="checkbox" />
              <label htmlFor="">Sauvegarder ces informatons pour un prochain achat</label>
            </div>
            <div className="l2">
              <input type="checkbox" />
              <label htmlFor="">Recevoir les notifications relatives à l'achat par SMS</label>
            </div>
          </div>
          <div className="paie">
          <button className='paiement'>
          <Link to="../eshop/achat">
            CONTINUER VERS LE PAIEMENT
          </Link>  
          </button>
          </div>
          
        </form>
      </div>



         
    </div>
  )
}

export default Connexion_a