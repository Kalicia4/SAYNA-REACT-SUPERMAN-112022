import React from 'react'
import '../styles/catalogue.css'
import fleche from '../assets/images/flèche_down_header.png'
import chariot from '../assets/icones/icone_1.png'
import {Link} from 'react-router-dom';

function Eshop() {

  return(
    <div className="haut">
<div className="container">
      <div className="titre">
        <h1>Récuperez le flow de Batman avec notre e-shop!</h1>
      </div>
      <div className="catalogue">
        <div class="fleche">
          <a>
            <img src={fleche}/>
          </a>
        </div>
        <div className="contenu">
          <div className="icone1">
            <Link to="/eshop/panier">
              <img src={chariot}/>
            </Link>
          </div>
          <div className="corps">
            <div className="filtre">
              <h1>Filtres</h1>
              <div className="prix">
                <h5>Prix</h5>
                <input type="number" min={0} max={200}  placeholder='entre 0 et 200 euro'/>
              </div>
              
              <br />

              <div className="dropdown">
                <select id="catégories">
                  <option value="option1">Catégorie</option>
                </select>
              </div>
              <br />
              <div className="selecteur">
                <label>
                  <input type="checkbox" name="filter" value="option1" />
                  Bestsellers
                </label>
                <label>
                  <input type="checkbox" name="filter" value="option2" />
                  Goodies
                </label>
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Vêtements
                </label>   
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Affiches/posters
                </label> 
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Comics
                </label> 
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Multimédia
                </label> 
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Equipement
                </label>  
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Bijoux
                </label>   
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Véhicules
                </label>                               
              </div>
              <br />
              <div className="dropdown">
                <select id="catégories">
                  <option value="option1">Couleur</option>
                </select>
              </div>
              <br />
              <div className="dropdown">
                <select id="catégories">
                  <option value="option1">Univers</option>
                </select>
              </div>
              <br />
              <div className="selecteur">
                <label>
                  <input type="checkbox" name="filter" value="option1" />
                  The Batman
                </label>
                <label>
                  <input type="checkbox" name="filter" value="option2" />
                  The Dark Night Rises
                </label>
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Batmna Vs Superman
                </label>   
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Batman et Robin
                </label> 
                <label>
                  <input type="checkbox" name="filter" value="option3" />
                  Autres
                </label>                             
              </div>

            </div>
            <div className="result">
              <div className="titrer">
                <h3>Résultat:<span>122</span></h3>
                <h4>Trier par </h4>
              </div>
              <div className="cartes">
                <div className="carte">
                  <div className="produit">
                    <div className="article1"></div>
                      <div className="com">
                        <h3>Mug voyage</h3>
                        <h4>20</h4>
                      </div>
                  </div>
                  <button> <Link to="/eshop/produit">Ajouter au panier</Link></button>
                </div>
                <div className="carte">
                  <div className="produit">
                  <div className="article2"></div>
                    <div className="com">
                      <h3>Sweat 'WHY SO SERIOUS'</h3>
                      <h4>32</h4>
                    </div>
                  </div>
                  <button>Ajouter au panier</button>
                </div>
                <div className="carte">
                  <div className="produit">
                    <div className="article3"></div>
                    <div className="com">
                      <h3>Tasse Batman</h3>
                      <h4>25</h4>
                    </div>
                  </div>
                  <button>Ajouter au panier</button>
                </div>
              </div>

              <div className="cartes">
                <div className="carte">
                  <div className="produit">
                    <div className="article4"></div>
                    <div className="com">
                      <h3>Tee-shirt Batman</h3>
                      <h4>15</h4>
                    </div>                    
                  </div>
                  <button>Ajouter au panier</button>
                </div>
                <div className="carte">
                  <div className="produit">
                    <div className="article5"></div>
                    <div className="com">
                      <h3>Montre</h3>
                      <h4>40</h4>
                    </div>                    
                  </div>
                  <button>Ajouter au panier</button>
                </div>
                <div className="carte">
                  <div className="produit">
                    <div className="article6"></div>
                    <div className="com">
                      <h3>Porte clé</h3>
                      <h4>5</h4>
                    </div>                    
                  </div>
                  <button>Ajouter au panier</button>
                </div>
              </div>

              <div className="cartes">
                <div className="carte">
                  <div className="produit">
                    <div className="article7"></div>
                    <div className="com">
                      <h3>Mug magique</h3>
                      <h4>30</h4>
                    </div>
                  </div>
                  <button>Ajouter au panier</button>
                </div>
                <div className="carte">
                  <div className="produit">
                    <div className="article8"></div>
                    <div className="com">
                      <h3>Bat alerte 'lampe'</h3>
                      <h4>15</h4>
                    </div>
                  </div>
                  <button>Ajouter au panier</button>
                </div>
                <div className="carte">
                  <div className="produit">
                    <div className="article9"></div>
                    <div className="com">
                      <h3>Figurine</h3>
                      <h4>20</h4>
                    </div>                    
                  </div>
                  <button>Ajouter au panier</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>)
    
}

export default Eshop