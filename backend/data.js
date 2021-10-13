import bcrypt from 'bcryptjs'
const data = {

    users: [
        {
            name: 'wallace',
            email: 'wallace@example.com',
            password: bcrypt.hashSync('12345', 8),
            isAdmin: true,
        },

        {
            name: 'mua',
            email: 'mua@example.com',
            password: bcrypt.hashSync('12345', 8),
            isAdmin: false,
        }
    ],
    products: [
         {
            name: 'African wdar1',
            category: 'gown',
            image: '/images/p13.jpg',
            price: 35000 ,
            brand: 'gowny',
            rating: 4.5,
            numReviews: 7,
            countInStock: 5,
            description: 'high quality product'
        },
         {
            name: 'African wear2',
            category: 'gown',
            image: '/images/p2.jpg',
            price: 35000,
            brand: 'gowny',
            rating: 4.5,
            numReviews: 12,
            countInStock: 2,
            description: 'high quality product'
        },
         {
            name: 'African wear3',
            category: 'gown',
            image: '/images/p3.jpg',
            price: 35000,
            brand: 'gowny',
            rating: 4.5,
            numReviews: 10,
            countInStock: 25,
            description: 'high quality product'
        },

         {
            name: 'African wear4',
            category: 'gown',
            image: '/images/p4.jpg',
            price: 35000,
            brand: 'gowny',
            rating: 4.5,
            numReviews: 10,
            countInStock: 5,
            description: 'high quality product'
        },
         {
          
            name: 'African wear5',
            category: 'gown',
            image: '/images/p5.jpg',
            price: 35000,
            brand: 'gowny',
            rating: 4.5,
            numReviews: 10,
            countInStock: 10,
            description: 'high quality product'
        },
         {
        
            name: 'African wear6',
            category: 'gown',
            image: '/images/p8.jpg',
            price: 35000,
            brand: 'gowny',
            rating: 4.5,
            countInStock: 5,
            numReviews: 50,
            description: 'high quality product'
        },
    ],
}
export default data