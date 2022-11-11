import { React } from 'react'
import '../../css/Cart.css'

function Cart() 
{

  //si panier non vide afficher la lise sinon afficher panier est vide
  var panier ="<div>Votre panier est vide</div>";

  let isOpen = false;

	return (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
			>
				Fermer
			</button>
			{ panier }
		</div>
	) 
}

export default Cart