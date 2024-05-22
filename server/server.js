// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const { lstat } = require('fs');

mongoose.connect('mongodb://localhost/fruitvegmarke',
{
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);

app.use(express.json());
app.use(cors()); // Use the cors middleware

const productSchema = new mongoose.Schema({
name: String,
type: String,
description: String,
price: Number,
image: String,
quantity: Number
});

const Product = mongoose.model('Product', productSchema);

// Function to seed initial data into the database
const seedDatabase = async () => {
try {
	await Product.deleteMany(); // Clear existing data

	const products = [
	{
		name: 'Apple',
		 type: 'Fruit',
		description: 'Fresh and crispy',
		price: 150,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142542/apple.jpg'
	},
	{
		name: 'Banana',
		type: 'Fruit',
		description: 'Rich in potassium',
		price: 75,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142554/banana.jpg'
	},
	{
		name: 'Orange',
		type: 'Fruit',
		description: 'Packed with vitamin C',
		price: 200,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg'
	},
	{
		name: 'Carrot',
		type: 'Vegetable',
		description: 'Healthy and crunchy',
		price: 100,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142613/carrot.jpg'
	},
	{
		name: 'Broccoli',
		type: 'Vegetable',
		description: 'Nutrient-rich greens',
		price: 175,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg'
	},
	{
		name: 'Grapes',
		type: 'Fruit',
		description: 'Sweet and juicy',
		price: 250,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142629/grapes.jpg'
	},
	{
		name: 'Strawberry',
		type: 'Fruit',
		description: 'Delicious red berries',
		price: 300,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142657/strawberry.jpg'
	},
	{
		name: 'Lettuce',
		type: 'Vegetable',
		description: 'Crisp and fresh',
		price: 120,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142635/lettue.jpg'
	},
	{
		name: 'Tomato',
		type: 'Vegetable',
		description: 'Versatile and flavorful',
		price: 180,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142704/tomato.jpg'
	},
	{
		name: 'Cucumber',
		type: 'Vegetable',
		description: 'Cool and hydrating',
		price: 130,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142621/cocumber.jpg'
	},
	{
		name: 'Pineapple',
		type: 'Fruit',
		description: 'hydrating',
		price: 65,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5Xm0QhTc3JUjnVcRI0QgVeK3YqPxV1RpoQ&usqp=CAU'

	},
	{
		name: 'Kiwi',
		type: 'Fruit',
		description: 'Healthy',
		price: 150,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVuq6p8JZrYR8nUZe3NuNbtUrVcRB7gQe8w&usqp=CAU'

	},
	{
		name: 'Lichi',
		type: 'Fruit',
		description:'Juicy lichis',
		price: 120,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70ZSy7qdZ57SiRjLp32Uf601rSvCGBTxbeg&usqp=CAU'

	},
	{
		name: 'Potato',
		type: 'Vegetable',
		description: ' Fresh Patatos',
		price: 130,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGvGpYE5Q7jZppMgL1EbLbotEscVTPVE-Qg&usqp=CAU'

	},
	{
		name: 'Pomegranate',
		type: 'Fruit',
		description: 'Tasty',
		price: 70,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShycttsHTVwHnyBPS2cIm3KMqKYnj0fcvt8Q&usqp=CAU'

	},
	{
		name: 'Dragon Fruit',
		type: 'Fruit',
		description: 'Rich Fruity Flavor',
		price: 100,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfaDJSAlZO8o-HerBWzsbaRogHbTABFIF0w&usqp=CAU'

	},
	{
		name: 'Mango',
		type: 'Fruit',
		description: ' Rich in antioxidants',
		price: 60,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxHxG0YWKjWWuJYtKV2GJHkjZbZWLyc0H1w&s'

	},
	{
		name: 'Peas ',
		type: 'Vegetable',
		description: ' Rich in fiber and protein',
		price: 40,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGifp_x5meMhzHPkFtkAQyAtBysyXwPh1sLg&s'

	},
	{
		name: 'Lemon ',
		type: 'Fruit',
		description: 'Good source of vitamin C.',
		price: 80,
		image:
'https://t4.ftcdn.net/jpg/02/57/88/47/360_F_257884725_wtQww1JqWripKZsIR3aMuidPhglniAOV.jpg'

	},
	{
		name: 'Spinach',
		type: 'Vegetbale',
		description: 'High antioxidant value',
		price: 70,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD73n94t7CmHqJfRzEpp18KeGTiKddwU8qXg&s'

	},
	{
		name: 'White Cabbage',
		type: 'Vagetable',
		description: 'Vitamin C-content',
		price: 55,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAB8zUEebLJjMtk4TssHJcf8BGZk7YZJKVRA&s'

	},
	{
		name: 'Watermelon',
		type: 'Fruit',
		description: 'Nutrients like lycopene',
		price: 80,
		image:
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPL4W5221i547oS1ZalcYbE1UjknPAYzs2g&s'

	},





	];

	await Product.insertMany(products);
	console.log('Database seeded successfully');
} catch (error) {
	console.error('Error seeding database:', error);
}
};

// Seed the database on server startup
seedDatabase();

// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
try {
	// Fetch all products from the database
	const allProducts = await Product.find();

	// Send the entire products array as JSON response
	res.json(allProducts);
} catch (error) {
	console.error(error);
	res.status(500)
	.json({ error: 'Internal Server Error' });
}
});

app.listen(PORT, () => {
console.log(
	`Server is running on port ${PORT}`
);
});
