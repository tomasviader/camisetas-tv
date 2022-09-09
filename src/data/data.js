
const stock = [
    {
    id : 1,
    nombre : 'Camiseta Argentina 2021',
    precio : 100,
    imgHome: '../../images/argentina-home.png',
    imgDetail: '../../images/argentina-detail.png',
    stock: 50,
    category: "argentina",
    talles: [
        {
            value: 'S',
            text: 'Small'        
        },
        {
            value: 'M',
            text: 'Medium'        
        },
        {
            value: 'L',
            text: 'Large'        
        }
    ]
},

    {
    id : 2,
    nombre : 'Camiseta Belgica 2022',
    precio : 200,
    imgHome: '../../images/belgica-home.png',
    imgDetail: '../../images/belgica-detail.png',
    stock: 30,
    category: "mundial",
    talles: [
        {
            value: 'S',
            text: 'Small'        
        },
        {
            value: 'M',
            text: 'Medium'        
        },
        {
            value: 'L',
            text: 'Large'        
        }
    ]    
    },

    {
    id : 3,
    nombre : 'Camiseta Bayern Munich Retro',
    precio : 300,
    imgHome: '../../images/munich-home.png',
    imgDetail: '../../images/munich-detail.png',
    stock: 10, 
    category: "clubes",
    talles: [
        {
            value: 'S',
            text: 'Small'        
        },
        {
            value: 'M',
            text: 'Medium'        
        },
        {
            value: 'L',
            text: 'Large'        
        }
    ]    
    }
]

export default stock