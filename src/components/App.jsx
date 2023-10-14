import React from 'react';
import '../styles/App.css'; //pour relier les styles css
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Eshop from '../pages/Eshop';
import MonCompte from '../pages/MonCompte';
import Layout from '../pages/Layout'
import '../pages/Panier'
import Panier from '../pages/Panier';
import Produits from '../pages/Produits';
import Commande from '../pages/Commande';
import Inscription from '../pages/Inscription';
import Connexion_a from '../pages/Connexion_a';
import Achat_avec_compte from '../pages/Achat_avec_compte';
// import Panier from '../pages/Panier';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Layout/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='game' element={<Game/>}/>
            <Route path='eshop' element={<Eshop/>}/>
            <Route path='compte' element={<MonCompte/>}/>
            <Route path='/eshop/produit' element={<Panier/>}/>
            <Route path='/eshop/panier' element={<Produits/>}/>
            <Route path='/eshop/panier/recap' element={<Commande/>}/>
            <Route path='/compte/inscription' element={<Inscription/>}/>
            <Route path='/eshop/authentification' element={<Connexion_a/>}/>
            <Route path='/eshop/achat' element={<Achat_avec_compte/>}/>



          </Route>
         
        </Routes>
      </BrowserRouter>
    </>
 
  )
}

export default App