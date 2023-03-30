let carddata=[];
let datas=[];
async function fetchdata(){

    const url=`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`;
    try{
        let result=await fetch(url);
        let output=await result.json();
        
        if(output.length>0){
        datas=[...output];}
       createCard(datas);   
    }
    catch(error){
        console.log(error);
    }
 }
 fetchdata();
 function createCard(value){
    value.forEach((data)=>{
    let card=document.getElementById('container');

    let booktitle=document.createElement('h1');
    booktitle.className = "h1"
    booktitle.innerText=`Title:${data.title}`;
   
    let storeid=document.createElement('h4');
    storeid.className = "h4"
    storeid.innerText=`Store id:${data.storeID}`;
    
    let salesprice=document.createElement('h4');
    salesprice.className = "h4"
    salesprice.innerHTML=`Sale Price:$${data.salePrice} <p>(you got  more than 50% discount)</p>`;

    let normalpricee=document.createElement('h4');
    normalpricee.className = "h4"
   normalpricee.innerText=`Normal Price:$${data.normalPrice}`;
    card.append(booktitle,storeid,salesprice,normalpricee);
 });
}
