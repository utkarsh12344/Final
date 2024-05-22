//client/src/App.js
import React from 'react';

import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';
//import ProductItem from './components/ProductItem';
 import Slideshow from './components/Slideshow';
 //import Cart from "./component/Cart";

 
 

 import Home from './components/Home';
  import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
  import Add from './components/Add';
  import Edit from './components/Edit';



// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpeg';
// import image3 from './images/image3.jpg';

// const App = () => {
// 	const images = [image1, image2, image3];
  
// 	return (
// 	  <div>
// 		<h1>My E-commerce Website</h1>
// 		<Slideshow images={images} />
// 	  </div>
// 	);
//   };

function App(){
	return(
		<div className="App">
		<Router>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path="/create" element={<Add />}/>
				<Route path="/edit" element={<Edit />}/>
			</Routes>
		</Router>
	</div>
	);
}
export default App;



// const App = () => {
// 	return (
// 		<CustomItemContext>
		
// 			<Header />
// 			{/* <Slideshow />*/} 
// 			<ProductList />
			
			
			
			


// 		</CustomItemContext>

// 	);
// };


// export default App;
