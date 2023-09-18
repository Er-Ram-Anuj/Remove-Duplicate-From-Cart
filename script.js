//let cartbtn=document.querySelectorAll(`.cart1`);

//let chosenItoms=document.getElementById(`chosenItom`);
let selectedItoms=[];
//cartbtn.forEach((button)=>{
   // let product=button.value ;
    //selectedItoms.push(product);
    //console.log(selectedItoms);
//})
let btns = document.querySelectorAll('.cart1');
btns.forEach(function (i) {
  i.addEventListener('click', function() {
    let product=i.value ;
    selectedItoms.push(product);
   document.getElementById("chosenItom").innerText=selectedItoms;
   document.getElementById("finalItom").innerText="";

  });
});


///////////////////////not working///////////////////////////////////
// function finalitom(){
//   let finalproduct = [...new Set(selectedItoms)];
//   switch(selectedItoms){
//     case (selectedItoms.length===0):
//     document.getElementById("finalItom").innerText="You Have not taken any itom";
//     break;
//     default:
//       document.getElementById("finalItom").innerText=finalproduct;
//   }
//   return false;
// }
///////////////////////////////////////////////////////


function finalitom(){
  let finalproduct = [...new Set(selectedItoms)];

  if(selectedItoms.length===0){
    document.getElementById("finalItom").innerText="You Have not taken any itom";
  }
  else{
    document.getElementById("finalItom").innerText=finalproduct;
  }
  return false;
}