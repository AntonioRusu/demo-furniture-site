const product = [
   {
       id: 0,
       image: 'img/buc1.jpg',
       title: 'Bucătărie',
       price: 3200,
   },
   {
       id: 1,
       image: 'img/baie1.jpg',
       title: 'Baie',
       price: 980,
   },
   {
       id: 2,
       image: 'img/pat1.jpg',
       title: 'Dormitor',
       price: 1390,
   },
   {
       id: 3,
       image: 'img/masa.jpg',
       title: 'Masă',
       price: 400,
   }
   
 ];
 const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
 document.getElementById('root').innerHTML = categories.map((item)=>
 {
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Adaugă în coș</button>"+
       `</div>
       </div>`
   )
 }).join('')
 
 var cart =[];
 
 function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
 }
 function delElement(a){
   cart.splice(a, 1);
   displaycart();
 }
 
 function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Coșul este gol";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }
 }
 