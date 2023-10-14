import React from 'react'
import '../styles/MonCompte.css'
import { Link } from 'react-router-dom'

function MonCompte() {
  return (
    <div className="connex">
      <div className="container">
        <div className="div1">
          <h2>Connexion</h2>
          <p>Vous n'avez pas encore de compte? <Link to="../compte/inscription">Inscrivez vous ici</Link></p>
          <div className="div2">
            <div className="div3">
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
    </div>
  )
}

export default MonCompte