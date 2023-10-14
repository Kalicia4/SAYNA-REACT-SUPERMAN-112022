import React from 'react'
import '../styles/Panier.css'
import { Link } from 'react-router-dom'
import chariot from '../assets/icones/icone_1.png'
import batman from '../assets/images/article_10.png'

function Panier() {
  return (
    <div className="panier">
      <div className="container">
        <div className="ligne">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="../eshop">Eshop</Link></li>
              <li class="breadcrumb-item active" aria-current="page">Panier</li>
            </ol>
          </nav>
          <div className="icone1">
            <img src={chariot}/>
          </div>
        </div>
        <div className="ligne1">
          <div className="image1">
            <img src={batman}/>
          </div>
          <div className="apropos">
            <div className="nomp">
              <h1>NOM DU PRODUIT</h1>
            </div>
            <div className="l1">
              <div className="prix">
                <h1>48</h1>
              </div>
              <div className="droite">
                <h6>En stock</h6>
                <div class="dropdown">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Taille M
                  </a>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Taille S</a></li>
                    <li><a class="dropdown-item" href="#">Taille M</a></li>
                    <li><a class="dropdown-item" href="#">Taille L</a></li>
                  </ul>
                </div>    
              </div>
            </div>
            <div className="l2">
              <button className="ajout">Ajouter au panier</button>
              <button className="coeur">j'aime</button>
            </div>
            <div className="l3">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio perferendis nostrum laudantium, maiores quibusdam natus repudiandae aliquid reprehenderit quos rem animi, dolorem, asperiores id! Cupiditate veniam omnis distinctio, facilis quia molestias eveniet natus, incidunt officiis suscipit architecto? Sequi, vel alias. Iste, accusamus nisi cupiditate perspiciatis, officia praesentium officiis, accusantium facilis non itaque culpa modi ad necessitatibus commodi. Est delectus ut commodi. Facilis, odio? Adipisci rem ratione fugit tempora quo ipsa eaque officia impedit quaerat alias? Id, voluptatem commodi! Qui quis alias iste et ex, enim rem architecto natus laboriosam nisi voluptas maiores itaque consectetur quae fuga eius repellendus quia eligendi?</p>
            </div>
          </div>
        </div>
        <div className="ligne2">
          <h4>Caractéristiques</h4>
          <p>Matériaux : </p>
          <p>Couleur : </p>
          <p>Poids : </p>
          <p>Capacité : </p>
        </div>
        <div className="ligne2">
          <h4>Livraison</h4>
          <p>Livraison à domicile.</p>
          <p>Retrait en point relais.</p>
          <p>Délai de livraison 2-4 jours</p>
        </div>
        <div className="commentaire">
          <h4>Commentaires</h4>
          <div className="nom">
            <h5>ROBERT</h5>
            <div className="date">
              <p>11.10.21</p>
            </div>
          </div> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam suscipit molestias corrupti eligendi magnam provident natus voluptatem quas commodi, ducimus asperiores rerum quaerat facere tempore molestiae eius officiis doloribus.</p>
        </div>
        <div className="commentaire">
          <div className="nom">
            <h5>JOHN</h5>
            <div className="date">
              <p>11.10.21</p>
            </div>
          </div> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam suscipit molestias corrupti eligendi magnam provident natus voluptatem quas commodi, ducimus asperiores rerum quaerat facere tempore molestiae eius officiis doloribus.</p>
        </div>
      </div>
      
    </div>
    
  )
}

export default Panier