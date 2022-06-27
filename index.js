/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/



const state = {
    items:[
    {
        id:1,
        name:"beetroot",
        price:0.35,
        inCart:0
    },
    {
        id:2,
        name:"carrot",
        price:0.50,
        inCart:0
    },
    {
        id:3,
        name:"apple",
        price:1.50,
        inCart:0
    },
    {
        id:4,
        name:"apricot",
        price:1.80,
        inCart:0
    
    },
    {
        id:5,
        name:"avocado",
        price:3.50,
        inCart:0
    },
    {
        id:6,
        name:"bananas",
        price:3.20,
        inCart:0
    },
    {
        id:7,
        name:"bell-pepper",
        price:2.50,
        inCart:0
    },
    {
        id:8,
        name:"berry",
        price:3.80,
        inCart:0
    },
    {
        id:0,
        name:"blueberry",
        price:4,
        inCart:0
    },
    {
        id:10,
        name:"eggplant",
        price:1.50,
        inCart:0
    }

   ],

   total:0
}

console.log(state)
