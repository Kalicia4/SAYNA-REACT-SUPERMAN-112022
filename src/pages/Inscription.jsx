import React from 'react'
import { Link } from 'react-router-dom'

function Inscription() {
  return (
    <div className="connex">
    <div className="container">
      <div className="div1">
        <h2>Inscription</h2>
        <p>Vous avez déjà un compte? <Link to="../../compte">Connectez vous ici</Link></p>
        <div className="div2">
          <div className="div3">
          <h6>Nom</h6>
            <div className="champ">
              <input type="text" placeholder="nom"/>
            </div>
           <br />
           <h6>Prénom</h6>
            <div className="champ">
              <input type="text" placeholder="prenom"/>
            </div>
           <br />
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
            <h6>Confirmer votre mot de passe</h6>
            <div className="champ">
              <input type="text" placeholder="confirmation du mot de passe" />
            </div>
            <br />
            <div className="valider">
              <button className="btnValid">VALIDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Inscription