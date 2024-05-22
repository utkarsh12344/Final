import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { itemContext } from '../context/ItemContext';
import './drawer.css';
import {loadStripe} from "@stripe/stripe-js";

// const totalPrice=NetTotal();

// //payment integration
// const makepayment=async()=>{
//   const stripe=await loadStripe("");
//   const body={
//     products:cart
//   }
//   const headers={
//     "Content-Type":"application/json"
//   }
//   const response=await fetch(`${apiURL}/create-checkout-session`,{
//     method:"POST",
//     headers:headers,
//     body:JSON.stringify(body)
//   })
//   const session=await response.json();
//   const result=stripe.redirectToCheckout({
//     sessionId:session.id
//   });

//   if(result.error){
//     console.log(result.error);
//   }

// }



export default function TemporaryDrawer() {
  const { cart, removeFromCart, totalPrice } = useContext(itemContext);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="cartTab">
        <h1>Shopping Cart</h1>
        <div className="listCart"></div>
        <div className="btn">
          <button className="close" onClick={toggleDrawer(false)}>CLOSE</button>
          {/* <button className="checkOut">Check Out</button> */}
          <a href="https://buy.stripe.com/test_9AQ7vF4acaRq7Cw8wx" class="payment-button">Payment</a>
          
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <div className="drawer-container">
          <div className="total-price-container">
            <h2>Total Price Rs.{totalPrice}</h2>
          </div>
          {DrawerList}
          <div className="cart-items">
            {cart?.map((item, index) => {
              console.log(item._id);
              return (
                <div className="cart-item" key={item._id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">Rs.{item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(item._id)}>   remove</button>
                
                </div>
              );
            })}
          </div>
        </div>

       
        
        {/* <button onClick="makePayment"
        className={`text-white ${
          totalPrice ===0 ? "bg-gray-400":"bg-primary"
        }p-2 rounded-sm w-full`}>
          Pay ${totalPrice
             === 0 ? 0 : totalPrice.toFixed(2)}
        </button> */}
        
      </Drawer>
      
    </div>
    
  );
}
