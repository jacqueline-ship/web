
 let marketShop=[
    {
        name:"tomato",
        quantity:56,
        type:"Kilo"
    },
    {
       name:"pepsi",
       quantity:8,
       type:"Unit"
    },
     { name:"milk",
      quantity: 60,
      type:"kilo"
    },
    {
        name:"indomine noodles",
        quantity:100,
        type:"Unit"
    },
    {
        name:"luxe biscuit",
        quantity:40,
        type:"Unit"
    },
    {
       name:"egg",
       quantity:30,
       type:"Unit"
    },
    {
        name:"Ahmad tea",
        quantity:20,
        type:"Unit"
    },
    {
        name:"rice",
        quantity:8,
        type:"Kilo"
    },
    {
        name:"Twinkie cake",
        quantity:35,
        type:"Unit"
    },
    {
       name:"Lay's chips",
       quantity:40,
       type:"Unit"
    }
 ];
  
function  getProducts(){

    console.log(marketShop);
}

    getProducts();

function addNewProducts(name,type,quantity){
    let shop= [...marketShop];
    shop.push({name,type,quantity});
    console.log(shop);
}
addNewProducts("chocolate","Unit",20);

function updateQuantity(name,quantity){
    let update=[...marketShop];
    for(i=0; i<update.length; i++){
        if(update[i].name===name){
            update[i].quantity=20;
            console.log(update);
        }
    }
}

updateQuantity("tomato",20);

function validatestring(str){
    if(typeof str !== "string"){
        throw new Error(`${str} enter name or type`);
    }
}
function validatenumber(num){
    if(typeof num !=="number"){
        throw new Error(`${num} enter a number`)
    }
    
}
function validation(name,type,quantity){
validatestring(name);
validatestring(type);
validatenumber(quantity);
return `${name}` +`${type}` + quantity ;
}

console.log(validation("tea","bar",5));
console.log(validation("tea",5,5));
console.log(validation(7,"bar",5));
console.log(validation("tea","bar","bar"));



