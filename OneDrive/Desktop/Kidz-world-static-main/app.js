// Selectors

// const buttons = document.getElementByClassName("button")
const buttons = document.getElementsByClassName("button")
const cartValue = document.getElementById("cart-value")
const cart = document.getElementById("cart")

// array
var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",()=>{
        items[i].quantity++;
        updateCart()
    })
}
  

function updateCart(){
    // initialize the valu of cart - 0
    let cart = 0;    
    // for loop

    // updated the cart value
    

    for(let i=0; i<items.length; i++){
        cart+=items[i].quantity;
    }
    cartValue.innerHTML = cart;

}

// global variable
let finalDollars = 0;
let finalCents = 0;
let total =0

const updatePrice = ()=>{
    for(let i=0; i<items.length; i++){
        total+= items[i].quantity*(items[i].dollars*100+items[i].cents);
    }

    finalDollars = Math.floor(total/100);
    finalCents = total%100;
}


cart.onclick=()=>{
  updatePrice();
  for(let i=0;i<items.length;i++){
      if(items[i].quantity !==0){
          console.log("Items Name: "+ items[i].name +"Items Quantity: "+ items[i].quantity)
      }
  }
  console.log("The total amount is "+ finalDollars +" $ and "+ "The total cents are "+ finalCents+" cents")
}