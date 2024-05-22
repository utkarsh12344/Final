// client/src/components/Header.js
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { itemContext } from '../context/ItemContext';
import logo from './assets/images1.png';
import TemporaryDrawer from './drawer';


const Header = () => {

	const { itemsInCart, totalPrice } = useContext(itemContext)

	return (
		<div className='header' >
			<h1 className='gfg'>
			<img src={logo} alt="commerce.js" height="25px" /> Shoppable<br/>
			
				E-commerce Website For Agricultutal Products
			</h1>
			<h3 style={{ color: "green" }}>
				Total Price: {totalPrice}
			</h3>
			<div className='cart-num'>
				<div className='cart-items'>
					{itemsInCart}
				</div>
				<FontAwesomeIcon icon={faCartShopping} size="4x" />
				<TemporaryDrawer/>
			</div>
		</div>
	);
};

export default Header;
